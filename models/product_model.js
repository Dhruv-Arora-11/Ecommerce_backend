const mongoose = require("mongoose"); 

const productSchema = new mongoose.Schema({
    pro_name:{
        type : String,
        required : true,
        unique:false
    },
    pro_price:{
        type: String ,
        required : true,
    },
    image:{
        type:String,
        required:true,
        unique:true
    },
},{timestamps:true})


const product = mongoose.model("product" , productSchema);

module.exports = product