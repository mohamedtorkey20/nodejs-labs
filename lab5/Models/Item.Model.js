const mongoose = require("mongoose");

let itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
});

module.exports = mongoose.model("item", itemSchema);
