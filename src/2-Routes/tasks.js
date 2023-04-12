const { Router } = require("express");

const tasks = Router();

tasks.get("/byStatus", (req, res) => {
  res.render("tasks_by_status", { layout: "tasks" });
});

module.exports = { tasks };
