var mongoose = require("mongoose");
mongoose.pluralize(null);

var productMasterSchema = new mongoose.Schema({
  categoryID: String,
  productID: String,
  productName: String,
  productDescription: String,
  productMRP: Number,
  productPrice: Number,
  productImage: String,
});

module.exports = new mongoose.model("productMaster", productMasterSchema);
