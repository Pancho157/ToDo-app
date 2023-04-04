const { Router } = require("express");

const forms = Router();

forms.get("/", (req, res) => {
  res.render("forms");
});

forms.post("/login", () => {});

forms.post("/register", () => {});

module.exports = { forms };
