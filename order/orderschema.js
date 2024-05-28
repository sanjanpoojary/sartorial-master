const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  address: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  orderStatus: { type: String, required: true },
  // paymentStatus: {type: String, required: true},
  orderdata: { type: Object, required: true },
  // userid: { type: String, required: true }
});

module.exports = mongoose.model("Order", orderSchema);
