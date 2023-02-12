// Creating express Router
const express=require("express")
const router=express.Router()

// @route  GET register
// @desc   show registeration page
// @access public

router.get('/register', (req, res) => {
    res.render('register.ejs',{error: ''});
});

module.exports=router