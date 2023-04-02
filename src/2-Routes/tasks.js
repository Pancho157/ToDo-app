const { Router } = require("express");

const tasks = Router();

tasks.get("/:user", () => {});

module.exports = { tasks };
