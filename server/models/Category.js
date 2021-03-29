const mongoose = require("mongoose");

const scheme = new mongoose.Schema({
  name: String,
});
module.exports = mongoose.model("Category", scheme);
