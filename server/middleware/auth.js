module.exports = (options) => async (req, res, next) => {
  const jwt = require("jsonwebtoken");
  const assert = require("http-assert");
  const Adminuser = require("../models/AdminUser");
  const token = String(req.headers.authorization || "")
    .split(" ")
    .pop();
  assert(token, 401, "请先登陆");
  const { id } = jwt.verify(token, req.app.get("secret"));

  assert(id, 401, "请先登陆");
  req.user = await Adminuser.findById(id);

  console.log(req.user);
  assert(req.user, 401, "请先登陆");
  await next();
};
