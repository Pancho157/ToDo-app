import { Router } from "express";

const accounts = Router();

accounts.get("/", (req, res) => {
  res.render("accounts");
});

export { accounts };
