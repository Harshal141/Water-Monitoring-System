const express = require('express');
const connectDB = require('./config/db');
const app = express();

// connect database and view engine
connectDB();
app.set('view-engine', 'ejs');

// middle ware for post body
// helps us to get data from req.body
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));

// authentication middleware
const auth = require('./middleware/auth');
const notauth = require('./middleware/notauth');

// @route  GET home/:name
// @desc   home page render
// @access private
app.get('/',auth, (req, res) => {
    res.render('index.ejs',{error:''});
})

// Routes
app.use('/',require('./routes/login'));
app.use('/',require('./routes/register'));
app.use('/',require('./routes/map'));

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));