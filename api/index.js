const dotenv = require("dotenv");
const express = require("express");
const { use } = require("express/lib/router");
const mongoose = require("mongoose");

const userRoute = require("./routes/user");

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
app.use("/api/users", userRoute);

app.listen(PORT, () => {
	console.log(`Listening to port ${PORT};`);
});
