const userModel = require("../models/user_model");
const mongoose = require("../connections/MongoConnections");
const pro_model = require("../models/product_model");


async function getUserWithEmail(req, res) {
    try {
        const gotUser = await userModel.findOne({ email: req.body.email });
        console.log(gotUser);
        if (!gotUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.end(gotUser);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function getAllUsers(req , res){
    try {
        const gotUser = await userModel.find()
        if (!gotUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(gotUser);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


async function postNewUser(req , res){

    try{
        if (
            !req.body.name ||
            !req.body.email
        ){
            return res.status(400).json({msg:"All fields are req..."})
        }

        const email = req.body.email;
        const name = req.body.name;

        createdUser = await userModel.create({
                name:`${name}`,
                email:`${email}`,
            }) 
        return res.end("Ok done !")


    }catch(e){
        return res.status(500).json({error:"There is some issue with the server"})
    }

}


async function updateUser(req , res){

    // find by existing email and then make changes for newName and newEmail

    try{
        if(!req.body.email){
            return res.status(400).json({error:"All the feilds are required"})
        }
        const email = req.body.email;
        const name = req.body.name;
        const newName = req.body.newName;
        const newEmail = req.body.newEmail;

        updated_user =await userModel.findOneAndUpdate(
            {
            name:`${name}`,
            email:`${email}`,
            },
            {
                name:`${newName}`,
                email:`${newEmail}`,
            },
            { new: true } 
        )

        return res.end("Ok updated !")

    }catch(e){
        return res.status(500).json({error:"Internal server error"})
    }
}



async function deleteUser(req, res) {
    try {
        if (!req.body.email) {
            return res.status(400).json({ error: "Email is required" });
        }
        const deletedUser = await userModel.findOneAndDelete({ email: req.body.email });

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json({ msg: "User deleted successfully" })

    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}



async function getAllUsers(req , res){
    try {
        console.log(`gotUser`)
        const gotUser = await userModel.find()
        console.log(`${gotUser}`)
        if (!gotUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(gotUser);
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


module.exports = {
    getUserWithEmail,
    postNewUser,
    updateUser,
    deleteUser,
    getAllUsers,
}