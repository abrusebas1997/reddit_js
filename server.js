require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/',(req, res)  => {
    res.render('home')
})

app.listen(port, () => console.log(`Listening on port ${port}!`))