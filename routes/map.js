// Creating express Router
const express=require("express")
const router=express.Router()

// importing models and middleware
const Data = require('../models/Data');
const auth = require('../middleware/auth');
const notauth = require('../middleware/notauth');

// @route  GET map
// @desc   redirect to home
// @access private
router.get('/map',auth,(req,res)=>{
    res.redirect(`/`);
})

// @route  POST map/place
// @desc   rendering a specific location
// @access private
router.post('/map',auth,async (req,res)=>{
    res.redirect(`/map/${req.body.loc}`)
})

// @route  GET map/place
// @desc   rendering map for current location
// @access private
router.get('/map/:place',auth,async (req,res)=>{

    let loc = req.params.place;
    try{
        
        // check if the location exists
        let data = await Data.findOne({"name":loc});
        if(!data){
            return res.render('index.ejs',{error: 'No data found'});
        }

        // Values required by map.ejs to render
        let layer  = await Data.find({},{"_id":0,"__v":0,"data":0});
        let layers = [],name = [],marker = [];
        let flow, ph, temp, turbidity;

        // storing values to var for graph view
        await data.data.forEach((item)=>{
            flow = JSON.parse(item.flow);
            ph = JSON.parse(item.ph);
            temp = JSON.parse(item.temp);
            turbidity = JSON.parse(item.turbidity);
        })
        let graph = [flow,ph,temp,turbidity]

        // acessing map markers and layers and storing in arrays
        await layer.forEach((item)=>{
            layers.push(item.layer);
            name.push(item.name);
            marker.push(item.marker);
        })

        // converting arrays to stings to send as parameters
        layers = JSON.stringify(layers);
        name = JSON.stringify(name);
        graph = JSON.stringify(graph);
        marker = JSON.stringify(marker);
        console.log(marker)

        // rendering map.ejs with all the vaues
        res.render('map.ejs',{data,graph,layers,name,marker});

        // Code to Enter value to database shortcut

        // let user = new Data({ // create new user instance
        //     name:"Jambhulwadi Lake",
        //     data : [
        //         {
        //             flow: "[7,7,7,7,7,7,3]",
        //             ph: "[7,7,7,7,7,7,3]",
        //             temp: "[7,7,7,7,7,7,3]",
        //             turbidity: "[7,7,7,7,7,7,3]"
        //         }
        //     ],
        //     layer: "https://api.maptiler.com/data/26207568-dcd9-4685-8dfc-20f9ce448bde/features.json?key=nHu6zcWr7zTF7fGWAQNO"
        // });

        // await user.save(); // save user to database
        // res.send(user);
    
    }catch(err){
        console.error(err.message);
        res.status(500).render('index.ejs', {error: 'Server Error'});
    }
})

module.exports=router