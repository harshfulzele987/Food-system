 const express = require('express');
const path = require('path');
const expressEjsLayouts = require('express-ejs-layouts');
const app = express()
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

//Database
require('./app/config/db/conn')
const User = require('./app/models/userSchema');

//middleware
const middleware = ( req ,res, next) =>{
    console.log('These is middleware')
    next();
}
//routes
 app.use(require('./routes/api'));
 
 
//sample routes

app.get('/', (req, res) =>{
    res.send("hello fro home")
})

app.get('/about', middleware , (req,res)=>{
    res.send("hello my about");
})

// set template engine
app.use(expressEjsLayouts)
app.set('views', path.join(__dirname , '/resources/views'))
app.set('view engine' ,'ejs')

//Server Port

app.listen(port, () => console.log(`Example app listening on port ${port}!`))