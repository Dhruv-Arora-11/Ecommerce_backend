const mongoose = require("mongoose");
const express = require("express");
const port = 3000;
const product_router = require("./routes/crudRoutes");
const {user_router} = require("./routes/userRouter");
const {connectMongo} = require("./connections/MongoConnections");
const app = express();

connectMongo().then(()=>console.log("mongo connected"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // Add this line
    
app.use("/products", product_router);
app.use("/user" , user_router);


app.listen(port , ()=>console.log(`Server started on port ${port}`))