require("dotenv").config();

const { forms } = require("../2-Routes/forms");
const { tasks } = require("../2-Routes/tasks");
const { canendar } = require("../2-Routes/canendar");
const { accounts } = require("../2-Routes/accounts");

const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

let app = express();

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
app.use("/notes", canendar);
app.use("/events", accounts);

// Error 404
app.use((req, res) => {
  res.status(404).render("error_404");
});
