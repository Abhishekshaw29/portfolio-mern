const mongoose = require('mongoose');
const dotenv = require('dotenv');
//connection
const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection success");
}).catch((err) => console.log(err + " no connection"));