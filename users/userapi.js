const express = require("express");
const router = express.Router();
module.exports = router;

const Users = require("./userschema");

router.get("/", async (req, res) => {
    let allUsers = await Users.find();
    res.status(201).json(allUsers);
});

router.post("/", async(req, res) => {
    let newUser = new Users({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        country: req.body.country,
        state: req.body.state,
        zipCode:req.body.zipCode,
    });
    let userinfo = await newUser.save();
    res.status(201).json(userinfo);
});