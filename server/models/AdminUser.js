const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    set(val) {
      return require('bcrypt').hashSync(val,10,);  //10安全加密指数，越高越安全，越耗时
    },
  },
});

module.exports = mongoose.model("AdminUser", schema);
