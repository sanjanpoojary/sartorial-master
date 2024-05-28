const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require('path');
dotenv.config();
const cors = require("cors");

console.log("Starting server...");

const keys = require('./config/keys');

// Database connection
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (error) => console.log("Database connection error:", error));
db.once("open", () => console.log("Database is connected..."));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
const users = require("./users/userapi");
const cart = require("./cart/cartapi");
const orders = require("./order/orderapi");
const products = require("./Items/productapi");
const delivery = require("./deliveryPrice/deliveryapi");
const discount = require("./discount/discountapi");
const adminRouter = require("./admin/adminRoute");
const emailRouter = require("./email/emailRoute");
require("./PaymentRoute/paymentRoutes")(app);

app.use("/userlist", users); 
app.use("/cartlist", cart); 
app.use("/orderlist", orders); 
app.use("/products", products); 
app.use("/deliveryprice", delivery); 
app.use("/discount", discount); 
app.use("/api", adminRouter);
app.use("/api", emailRouter);

app.use(express.static(path.join(__dirname, 'bespoke', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'bespoke', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
