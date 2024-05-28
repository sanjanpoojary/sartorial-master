const mongoose = require("mongoose");


const cartStructure = new mongoose.Schema({
    Back_Jacket_length: {type: String,},
    Back_Width: {type: String,},
    BreastStyle: {type: String,},
    ButtonStyle: {type: String,},
    Chest_Circumference: {type: String,},
    Front_Jacket_length: {type: String,},
    Head_Circumference: {type: String,},
    Height: {type: String,},
    Hip_Circumference: {type: String,},
    Inside_Length: {type: String,},
    Message: {type: String,},
    Neck_Circumference: {type: String,},
    ShoulderType: {type: String,},
    Sleeve_length: {type: String,},
    Trouser_Length: {type: String,},
    Type: {type: String,},
    VentStyle: {type: String,},
    Waist_Circumference: {type: String,},
    bodyType: {type: String,},
    item: {type: String,},
    bodyFitting: {type: String,},
    fabric: {type: String,},
    lapelStyle: {type: String,},
    trousePleat: {type: String,},
    trouserBuckle: {type: String,},
    trouserLoop: {type: String,},
    trouserPocket: {type: String,},
    deliveryType: {type: String,},
    grandTotal: {type: String,}
});

module.exports = mongoose.model("Cart", cartStructure);