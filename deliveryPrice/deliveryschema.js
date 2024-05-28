const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
    deliveryType: { type: String, required: true },
    price: { type: String, required: true },
    handlingFee:{ type: String, required: true },
    tax: { type: String, required: true },
    days: { type: String, required: true },
})

module.exports = mongoose.model("Delivery", deliverySchema);