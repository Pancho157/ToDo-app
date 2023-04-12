const { Router } = require("express");

const accounts = Router();

accounts.get("/", (req, res) => {
  res.render("accounts");
});

module.exports = { accounts };
