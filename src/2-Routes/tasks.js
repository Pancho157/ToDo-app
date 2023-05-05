import Router from "express";

const tasks = Router();

tasks.get("/byStatus", (req, res) => {
  res.render("tasks_by_status", { layout: "tasks" });
});

tasks.get("/byPriority", (req, res) => {
  res.render("tasks_by_priority", { layout: "tasks" });
});

tasks.get("/byList", (req, res) => {
  res.render("tasks_list", { layout: "tasks" });
});

tasks.get("/timeline", (req, res) => {
  res.render("tasks_by_timeline", { layout: "tasks" });
});

export { tasks };
