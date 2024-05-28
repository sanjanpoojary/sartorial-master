const express = require("express");
const router = express.Router();
module.exports = router;

const Delivery = require("./deliveryschema");

router.get("/", async (req, res) => {
    let alldelivery = await Delivery.find();
    res.status(200).json(alldelivery);
});

router.post("/", async (req, res) => {
    let newDelivery = new Delivery({
        deliveryType: req.body.deliveryType,
        price: req.body.price,
        handlingFee: req.body.handlingFee, 
        tax: req.body.tax,
        days: req.body.days,
    });

    let deliveryinfo = await newDelivery.save();
    res.status(201).json(deliveryinfo);
});

router.patch("/:id", async (req, res) => {
    let deliveryId = req.params.id;
    let updateFields = {
        price: req.body.price,
        days: req.body.days,
        handlingFee: req.body.handlingFee, 
        tax: req.body.tax,
    };

    let updatedDelivery = await Delivery.findByIdAndUpdate(deliveryId, updateFields, { new: true });
    if (!updatedDelivery) {
        return res.status(404).json({ msg: "Delivey details not found" });
    }

    res.status(200).json(updatedDelivery);
});