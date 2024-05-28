const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require('path');
dotenv.config();
const keys = require('./config/keys');
const cors = require("cors");

// Database connection
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (error) => console.log("Database connection error:", error));
db.once("open", () => console.log("Database is connected..."));

// Middleware
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

app.use("/userlist", users); //http://localhost:6451/userlist
app.use("/cartlist", cart); //http://localhost:6451/cartlist
app.use("/orderlist", orders); //http://localhost:6451/orderlist
app.use("/products", products); //http://localhost:6451/products
app.use("/deliveryprice", delivery); //http://localhost:6451/deliveryprice
app.use("/discount", discount); //http://localhost:6451/discount
app.use("/api", adminRouter);
app.use("/api", emailRouter);

// Static files and SPA fallback
app.use(express.static(path.join(__dirname, 'bespoke', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'bespoke', 'dist', 'index.html'));
});

// Server setup
const PORT = process.env.PORT || keys.port || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
