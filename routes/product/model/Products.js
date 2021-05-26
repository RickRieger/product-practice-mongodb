const mongoose = require("mongoose");

//the new keyword means create a new object{}

const productSchema = new mongoose.Schema({
  productName:{
    type: String,
  },
});

module.exports = mongoose.model("product", productSchema);