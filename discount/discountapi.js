const express = require("express");
const router = express.Router();
module.exports = router;

const Discount = require("./discountSchema");

router.get("/", async (req, res) => {
    let alldiscount = await Discount.find();
    res.status(200).json(alldiscount);
});

router.post("/", async (req, res) => {
    let newDiscount = new Discount({
        discountName: req.body.discountName,
        discountPrice: req.body.discountPrice,
    });

    let discountinfo = await newDiscount.save();
    res.status(201).json(discountinfo);
});

router.patch("/:id", async (req, res) => {
    let discountId = req.params.id;
    let updateFields = {
        discountPrice: req.body.discountPrice,
    };

    let updatedDiscount = await Discount.findByIdAndUpdate(discountId, updateFields, { new: true });
    if (!updatedDiscount) {
        return res.status(404).json({ msg: "Discount details not found" });
    }

    res.status(200).json(updatedDiscount);
});