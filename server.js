const express = require('express');
const app = express();

// middle ware for post body
// helps us to get data from req.body
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));

app.get('/', auth, (req, res) => res.render('index.ejs',{error: ''}));

// Routes
app.use('/',require('./routes/login'));
app.use('/',require('./routes/register'));
app.use('/',require('./routes/map'));

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));