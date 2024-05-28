const express = require("express");
const router = express.Router();
module.exports = router;

const Product = require("./productschema");

router.get("/", async (req, res) => {
  let allproducts = await Product.find();
  res.status(201).json(allproducts);
});

router.post("/", async (req, res) => {
  let newItem = new Product({
    pname: req.body.pname,
    photo: req.body.photo,
    StandardPrice: req.body.StandardPrice,
    // priceXS: req.body.priceXS,
    // priceS: req.body.priceS,
    // priceM: req.body.priceM,
    // priceL: req.body.priceL,
    // priceXL: req.body.priceXL,
    // priceXXL: req.body.priceXXL,
  });

  let productinfo = await newItem.save();
  res.status(201).json(productinfo);
});

router.patch("/:id", async (req, res) => {
  let productId = req.params.id;
  let updateFields = {
    StandardPrice: req.body.StandardPrice,
    // priceXS: req.body.priceXS,
    // priceS: req.body.priceS,
    // priceM: req.body.priceM,
    // priceL: req.body.priceL,
    // priceXL: req.body.priceXL,
    // priceXXL: req.body.priceXXL,
  };

  let updatedProduct = await Product.findByIdAndUpdate(
    productId,
    updateFields,
    { new: true }
  );
  if (!updatedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(updatedProduct);
});

// router.delete("/:id", async (req, res) => {
//   const productId = req.params.id;
//   try {
//     const deleleProduct = await Product.findByIdAndDelete(productId);
//     if (!deleleProduct) {
//       res.status(404).json({ success: false, message: "Product not found" });
//     }
//     res
//       .status(200)
//       .json({ success: true, message: "Product deleted successfully" });
//   } catch (error) {
//     console.log("Error deleting product ", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to delete product" });
//   }
// });

StandardPrice: 500;
