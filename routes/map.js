// Creating express Router
const express=require("express")
const router=express.Router()

// importing models and middleware
const Data = require('../models/Data');
const auth = require('../middleware/auth');
const notauth = require('../middleware/notauth');

module.exports=router