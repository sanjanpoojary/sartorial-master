const mongoose = require("mongoose");

const usersStructure = new mongoose.Schema({
  fullName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  phone: {type: String, required: true},
  address: {type: String, required: true},
  country: {type: String, required: true},
  state: {type: String, required: true},
  zipCode: {type: String, required: true},
});


module.exports = mongoose.model("Users", usersStructure);