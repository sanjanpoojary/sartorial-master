const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
    discountName: { type: String, required: true },
    discountPrice: { type: String, required: true },
})

module.exports = mongoose.model("Discount", discountSchema);