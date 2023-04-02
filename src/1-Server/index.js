require("dotenv").config();

const { forms } = require("../2-Routes/forms");
const { tasks } = require("../2-Routes/tasks");
const { notes } = require("../2-Routes/notes");
const { events } = require("../2-Routes/events");

const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

var app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server online - port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// Handlebars initialization
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", forms);
app.use("/tasks", tasks);
app.use("/notes", notes);
app.use("/events", events);

// Error 404
app.use((req, res) => {
  res.status(404).send("Error 404: Page not found");
});
