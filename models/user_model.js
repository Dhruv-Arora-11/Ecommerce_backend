const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    cartList:{
        type: Array,
        required: true,
        unique:false,
    }
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
