module.exports = app => {
  const router = require("express").Router();
  const Category = require('../../models/Category')

  router.post("/categories", async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  });

  app.use("/admin/api", router);
};
