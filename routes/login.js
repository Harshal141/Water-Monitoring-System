// Creating express Router
const express=require("express")
const router=express.Router()

// importing bcrypt and jwt
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// importing models and middleware
const User = require('../models/User');
const auth = require('../middleware/auth');
const notauth = require('../middleware/notauth');

// @route  GET login
// @desc   login page render
// @access public
router.get('/login',notauth, (req, res) => {
    res.render('login.ejs',{error: ''});
});

// @route  POST login
// @desc   login user + jwt token 
// @access public
router.post('/login',notauth,
async (req,res)=>{
    
    const {email, password} = req.body; // destructure

    try {

        let user = await User.findOne({email});
        if(!user){ // return error of type as above if user exists
            return res.render('login.ejs',{error: 'Invalid Credentials'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.render('login.ejs',{error: 'Invalid Credentials'});
        }

        const payload = {
            user: {
                id: user.id
            }
        }
        // defining the token and sending it back to the client
        jwt.sign(payload, config.get('jwtSecret'), (err, token)=>{
            req.header['x-auth-token'] = token;
            // console.log(req.header['x-auth-token']);
            if(err) throw err;
            res.redirect(`/`);
        });

    } catch(err){
        console.error(err.message);
        res.status(500).render('login.ejs', {error: 'Server Error'});
    }   
}
);

// @route  POST logout
// @desc   Logout user
// @access private
router.post('/logout',auth, (req, res) => {
    req.header['x-auth-token'] = '';
    res.redirect('/login');
});

module.exports=router