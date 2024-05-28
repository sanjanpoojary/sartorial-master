const express = require("express");
const router = express.Router();
module.exports = router;

const Order = require("./orderschema");
const Cart = require("../cart/cartschema");

router.get("/", async (req, res) => {
  let allorder = await Order.find();
  res.status(200).json(allorder);
});

router.post("/", async (req, res) => {
  let newOrder = new Order({
    address: req.body.address,
    country: req.body.country,
    email: req.body.email,
    fullName: req.body.fullName,
    phone: req.body.phone,
    state: req.body.state,
    zipCode: req.body.zipCode,
    orderStatus: req.body.orderStatus,
    orderdata: req.body.itemlist,
    // userid: { type: String, required: true }
    // paymentStatus: req.body.paymentStatus,
  });

  let pinfo = await newOrder.save();
  await Cart.deleteMany();
  const { _id, fullName, orderdata } = pinfo;
  // console.log(pinfo);
  res.status(201).json({
    orderId: _id,
    fullName: fullName,
    items: orderdata,
    msg: "Order Placed Successfully...",
  });
});

router.patch("/:orderId", async (req, res) => {
  const orderId = req.params.orderId;
  const updatedStatus = req.body.orderStatus;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { orderStatus: updatedStatus },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: "Failed to update order" });
  }
});

router.get("/:orderId", async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch order details" });
  }
});

// router.put("/:orderId", async (req, res) => {
//   let allorder = await Order.findById(req.params.orderId);
//   res.status(200).json(allorder);
// });
