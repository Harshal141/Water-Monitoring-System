const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next) {
    // get token from header
    const token = req.header['x-auth-token'];
    
    if(token){
        let name =req.header['name'];
        return res.redirect(`/home/'`);
    }
    next();
}