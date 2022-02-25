const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoute = require("./routes/product");

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
app.use(cors());

app.use("/api/products", productRoute);

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT};`);
});
