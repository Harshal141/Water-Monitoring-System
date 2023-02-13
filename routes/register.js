// Creating express Router
const express=require("express")
const router=express.Router()

// importing bcrypt and jwt
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// importing models and middleware
const User = require('../models/User');

// @route  GET register
// @desc   show registeration page
// @access public
router.get('/register', (req, res) => {
    res.render('register.ejs',{error: ''});
});

// @route  POST register
// @desc   resister user to database
// @access public
router.post('/register', async (req, res) => {
    const {name, email, password,address,phone} = await req.body; // destructure

    try {
        let user = await User.findOne({email});
        if(user){ // return error of type as above if user exists 
            return res.status(500).render('register.ejs', {error: 'User already exists'});
        }

        user = new User({ // create new user instance
            name,
            email,
            password,
            address,
            phone
        });

        const salt = await bcrypt.genSalt(10); // generate salt
        user.password = await bcrypt.hash(password, salt); // hash password


        await user.save(); // save user to database
        return res.redirect('/login');

    } catch(err){
        console.error(err.message);
        res.status(500).render('register.ejs', {error: 'Server Error'});
    }   
});

module.exports=router