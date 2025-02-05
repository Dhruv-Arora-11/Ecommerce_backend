const mongoose = require("mongoose");

async function connectMongo(){
    return mongoose.connect("mongodb+srv://dhruv1472005:dhruv1472005@cluster0.7okvr.mongodb.net/");
    
}

module.exports = {
    connectMongo
}