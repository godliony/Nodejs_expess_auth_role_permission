const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;


// built-in middleware to handle urlencoded data
// in other words, form data:
// 'content-type: application/x-www-form-urlencoded'
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// built-in middleware for json

require('./routes')(app);

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
})

