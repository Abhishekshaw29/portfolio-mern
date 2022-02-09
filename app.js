const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cookieParser = require('cookie-parser')

dotenv.config({ path: './config.env' })
const port = process.env.PORT || 5000;

//DB connection
require('./db/conn');

app.use(express.json());
app.use(cookieParser());

//routing
app.use(require('./router/auth'));

// step 3: Heroku 
if ( process.env.NODE_ENV == "production"){ 
    app.use(express.static("client/build"));
     const path = require("path"); 
     app.get("*", (req, res) => {
         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
     });
}

app.listen(port, () => {
    console.log(`server running at ${port}`);
});