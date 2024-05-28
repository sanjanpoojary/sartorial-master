const keys = require("../config/keys");
const {
  sendOrderConfirmationEmail,
} = require("../email/sendOrderConfirmationEmail");
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY);
const Order = require("../order/orderschema");

module.exports = (app) => {
  app.post("/api/stripe", async (req, res) => {
    // console.log("Recieved reuquest for payment...");
    // console.log(req.body);

    try {
      const { amount, id, orderId } = req.body;
      // console.log("ORDER ID BACKEND", orderId);
      if (!amount || !id || !orderId) {
        return res.status(400).json({ error: "Missing required fields." });
      }

      const charge = await stripe.charges.create({
        amount,
        currency: "usd",
        description: "Fab Service Charges",
        source: id,
      });

      // console.log(charge);
      // Update Database

      const updateOrder = await Order.findByIdAndUpdate(
        orderId
        // { paymentStatus: charge.status ? "Paid" : "Failed" },
        // { new: true }
      );
      if (!updateOrder) {
        return res.status(404).json({ message: "Order not found" });
      }
      const receiptUrl = charge.receipt_url;
      //email method
      sendOrderConfirmationEmail(updateOrder, receiptUrl);

      res.status(200).json({
        success: true,
        message: "Payment Success",
        order: updateOrder,
      });
    } catch (error) {
      console.error("Error processing payment:", error.message);
      res.status(500).json({ error: error.message });
    }
  });
};
