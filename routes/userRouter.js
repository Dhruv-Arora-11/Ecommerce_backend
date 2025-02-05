const mongoose = require("mongoose");
const express = require("express");
const {getUserWithEmail , postNewUser , updateUser , deleteUser , getAllUsers} = require("../controllers/userController")

const user_router = express.Router();

user_router.get("/getUserWithEmail" , getUserWithEmail)
user_router.get("/getAllUsers" , getAllUsers)
user_router.post("/postNewUser" , postNewUser);
user_router.put("/updateUser" , updateUser);
user_router.delete("/deleteUser" , deleteUser);

module.exports = {
    user_router
}