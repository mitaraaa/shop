const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		id: { type: Number, required: true, unique: true },
		title: { type: String, required: true },
		img: { type: String, required: true },
		types: { type: Array },
		price: { type: Number, required: true },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Product", ProductSchema);
