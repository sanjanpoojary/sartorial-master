const nodemailer = require("nodemailer");
const keys = require("../config/keys");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: keys.emailFrom,
    pass: keys.emailPass,
  },
});
function sendOrderConfirmationEmail(orderDetails, receiptUrl) {
  // console.log("Entering auto mail function orderDetails ==>", orderDetails);
  const deliveryDays =
    orderDetails.orderdata[0].deliveryType === "Express Delivery"
      ? "13 days"
      : "22 days";
  const mailOptions = {
    from: keys.emailFrom,
    to: orderDetails.email,
    subject: "Order Confirmation",
    bcc: keys.bccEmails,
    html: `<p>Hi ${orderDetails.fullName},</p>
    <p>Your Order has been placed successfully!</p>
    <p>Order ID: ${orderDetails._id}</p>
    <p>Items: ${orderDetails.orderdata.map((item) => item.item).join(", ")}</p>
    <p>Total Price :$${orderDetails.orderdata[0].grandTotal}</p>
    <p>Estimated Delivery in: ${deliveryDays}</p> 
    <p>Please expect a delay of approximately 3 days due to any unavoidable conditions.</p> 
    <p>Thank you for shopping with us!</p>
    <p>Here is your receipt: <a href="${receiptUrl}">Click here</a></p>`,
    bcc: keys.bccEmails,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      // console.log("Email sent:", info.response);
    }
  });
}

module.exports = {
  sendOrderConfirmationEmail,
};
