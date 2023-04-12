const { Router } = require("express");

const calendar = Router();

calendar.get("/:user", (req, res) => {
  res.render("calendar", { layout: "calendar" });
});

module.exports = { calendar };
