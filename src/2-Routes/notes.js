const { Router } = require("express");

const notes = Router();

notes.get("/:user", () => {});

module.exports = { notes };