const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    pname: {type: String, required: true},
    photo: {type: String, required: true},
    StandardPrice: {type: String, required: true},

    // priceXS: {type: String, required: true},
    // priceS: {type: String, required: true},
    // priceM: {type: String, required: true},
    // priceL: {type: String, required: true},
    // priceXL: {type: String, required: true},
    // priceXXL: {type: String, required: true},
});

module.exports = mongoose.model("Product", productSchema);