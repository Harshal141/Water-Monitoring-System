const express = require('express');
const app = express();

// middle ware for post body
// helps us to get data from req.body
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));