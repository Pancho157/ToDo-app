import Router from "express";

const forms = Router();

forms.get("/", (req, res) => {
  res.render("forms", { layout: "forms" });
});

forms.post("/login", () => {});

forms.post("/register", () => {});

export { forms };
