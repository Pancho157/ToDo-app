import { Router } from "express";

const calendar = Router();

calendar.get("/", (req, res) => {
  res.render("calendar", { layout: "calendar" });
});

export { calendar };
