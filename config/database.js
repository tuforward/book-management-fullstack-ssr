/** IMPORT & REQUIRE PACKAGE */
const mongoose = require('mongoose');

module.exports.connect = ()=> {
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database MongoDB connected success!");
    }
    catch(error){
        console.error("ERROR DATABSE", error);
    }
}