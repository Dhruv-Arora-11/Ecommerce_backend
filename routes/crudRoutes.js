const express = require("express");
const {get_all_products , post_product , delete_product , update_product} = require("../controllers/product_controllers")
const router = express.Router();

router.get("/get_all_products",get_all_products);


router.post("/post_product",post_product);


router.delete("/delete_product",delete_product);

router.put("/update_product", update_product);


module.exports = router;