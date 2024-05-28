const express = require("express");
const router = express.Router();
module.exports = router;

const Cart = require("./cartschema");

router.get("/", async (req, res) => {
  let cartitem = await Cart.find();
  res.status(201).json(cartitem);
});

router.post("/", async (req, res) => {
  let newCartItem = new Cart({
    Back_Jacket_length: req.body.Back_Jacket_length,
    Back_Width: req.body.Back_Width,
    BreastStyle: req.body.BreastStyle,
    ButtonStyle: req.body.ButtonStyle,
    Chest_Circumference: req.body.Chest_Circumference,
    Front_Jacket_length: req.body.Front_Jacket_length,
    Head_Circumference: req.body.Head_Circumference,
    Height: req.body.Height,
    Hip_Circumference: req.body.Hip_Circumference,
    Inside_Length: req.body.Inside_Length,
    Message: req.body.Message,
    Neck_Circumference: req.body.Neck_Circumference,
    ShoulderType: req.body.ShoulderType,
    Sleeve_length: req.body.Sleeve_length,
    Trouser_Length: req.body.Trouser_Length,
    Type: req.body.Type,
    VentStyle: req.body.VentStyle,
    Waist_Circumference: req.body.Waist_Circumference,
    bodyType: req.body.bodyType,
    item: req.body.item,
    bodyFitting: req.body.bodyFitting,
    fabric: req.body.fabric,
    lapelStyle: req.body.lapelStyle,
    trousePleat: req.body.trousePleat,
    trouserBuckle: req.body.trouserBuckle,
    trouserLoop: req.body.trouserLoop,
    trouserPocket: req.body.trouserPocket,
    deliveryType: req.body.deliveryType,
    grandTotal: req.body.grandTotal,
  });
  let cartinfo = await newCartItem.save();
  res.status(201).json(cartinfo);
});

router.patch("/:id", async (req, res) => {
  // const cartItem = await Cart.findById(req.params.id);
  // if (!cartItem) {
  //   return res.status(404).json({ message: "Item not found" });
  // }
  // if (req.body.deliveryType != null) {
  //   cartItem.deliveryType = req.body.deliveryType;
  // }
  // if (req.body.grandTotal != null) {
  //   cartItem.grandTotal = req.body.grandTotal;
  // }
  // const updatedCartItem = await cartItem.save();
  // res.json(updatedCartItem);
  // res.status(400).json({ message: error.message });
  try {
    const cartItem = await Cart.findById(req.params.id);
    if (!cartItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    if (req.body.deliveryType != null) {
      cartItem.deliveryType = req.body.deliveryType;
    }
    if (req.body.grandTotal != null) {
      cartItem.grandTotal = req.body.grandTotal;
    }
    const updatedCartItem = await cartItem.save();
    res.json(updatedCartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.delete("/:id", async (req, res) => {
  let allItems = await Cart.findById(req.params.id);
  if (allItems == null) {
    res.status(200).json({ "msg": "Item does not Exists !" });

  } else {
    await allItems.deleteOne();
    res.status(200).json({ "msg": "Item Deleted Successfuly !" });
  }
})