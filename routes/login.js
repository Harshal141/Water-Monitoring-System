// Creating express Router
const express=require("express")
const router=express.Router()

// @route  GET login
// @desc   login page render
// @access public

router.get('/login', (req, res) => {
    res.render('login.ejs',{error: ''});
});

module.exports=router