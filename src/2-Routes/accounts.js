const { Router } = require("express");

const accounts = Router();

accounts.get("/:user", () => {});

module.exports = { accounts };