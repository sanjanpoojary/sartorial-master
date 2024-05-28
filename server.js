const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// dotenv.config();
const keys = require('./config/keys');

// const multer = require("multer");
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
// const cookieParser = require("cookie-parser");
mongoose.connect(keys.mongoURI);

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.on("open", () => console.log("Database is connected... "));

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// api's

const users = require("./users/userapi");
app.use("/userlist", users); //http://localhost:6451/userlist

const cart = require("./cart/cartapi");
app.use("/cartlist", cart); //http://localhost:6451/cartlist

const orders = require("./order/orderapi");
app.use("/orderlist", orders); //http://localhost:6451/orderlist

const products = require("./Items/productapi");
app.use("/products", products); //http://localhost:6451/products

const delivery = require("./deliveryPrice/deliveryapi");
app.use("/deliveryprice", delivery); //http://localhost:6451/deliveryprice

const discount = require("./discount/discountapi");
app.use("/discount", discount); //http://localhost:6451/discount

//Admin Router
const adminRouter = require("./admin/adminRoute");
app.use("/api", adminRouter);

app.use("/api", require("./email/emailRoute"));

//Payment route

require("./PaymentRoute/paymentRoutes")(app);

const path = require('path');
app.use(express.static(path.join('bespoke', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'bespoke', 'dist', 'index.html'));
});

// const PORT = process.env.PORT || 6451;
app.listen(7000, () => {
  console.log("Server is running at port: ");
});
