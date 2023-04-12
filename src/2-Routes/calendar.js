const { Router } = require("express");

const calendar = Router();

calendar.get("/", (req, res) => {
  res.render("calendar", { layout: "calendar" });
});

module.exports = { calendar };
