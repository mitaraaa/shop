const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
const cartRoute = require("./routes/cart");
const authRoute = require("./routes/auth");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGODB_URL)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => {
		console.error(err);
	});

app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/carts", cartRoute);
app.use("/api/auth", authRoute);
app.use("/api/orders", orderRoute);
app.use("/api/payment", paymentRoute);

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT};`);
});
