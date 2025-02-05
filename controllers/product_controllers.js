const pro_model = require("../models/product_model");

async function get_all_products(req, res) {
    try {
        const all_products = await pro_model.find();
        console.log(`products are: ${all_products}`);
        res.status(200).json({ products: all_products });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Server error" });
    }
}

async function post_product(request,response){
    const body = request.body;
    if (
        !body.pro_name ||
        !body.pro_price ||
        !body.image
    ){
        return response.status(400).json({msg:"All fields are req..."})
    }
    try{
        const newProduct = await pro_model.create({
            pro_name: request.body.pro_name,
            pro_price: request.body.pro_price,
            image: request.body.image,
        })
        return response.end("Ok done !")
    }catch(e){
        response.status(500).json({ error: e.message });
    }
}

async function delete_product(request,response){
    const body = request.body;
    if (
        !body.pro_name ||
        !body.pro_price ||
        !body.image
    ){
        return response.status(400).json({msg:"All fields are req..."})
    }
    try{
        const pro_to_delete = await pro_model.findOneAndDelete({
            pro_name: body.pro_name,
            pro_price: body.pro_price,
            image: body.image
        });
        if (!pro_to_delete) {
            return response.status(404).json({ msg: "Product not found" });
        }
        response.status(200).json({ msg: "Product deleted successfully" });
        
    }catch(e){
        res.status(500).json({ error: e.message });
    }
}


async function update_product(request,response){
    const body = request.body;
    if (
        !body.pro_name ||
        !body.pro_price ||
        !body.image
    ) {
        return response.status(400).json({ msg: "All fields are required" });
    }
    try {
        const updated_user = await usermodel.findOneAndUpdate(
            { name: name, email: email },
            { name: newName, email: newEmail },
            { new: true }
        );
        
        if (!updated_user) {
            return res.status(404).json({ error: "User not found" });
        }
        
        return res.json(updated_user);
        
        response.status(200).json({ msg: "Product updated successfully", product: updatedProduct });
    } catch (e) {
        response.status(500).json({ error: e.message });
    }
}


module.exports = {
    get_all_products,
    post_product,
    delete_product,
    update_product
};
