const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDocs = YAML.load("./api.yaml");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));
app.use(express.json());

//Routes
app.get("/todos", (req, res) => {
  res.status(400).send("STRING RES");
});

app.get("/todo/:id", (req, res) => {
  const obj = { name: "todo1" };
  res.status(200).send(obj + " : with ID " + req.params.id);
});

app.post("/todo", (req, res) => {
  todo = [req.body];
  res.status(200).send(todo);
});

app.post("/register", (req, res) => {
  userInfo = [req.body];
  res.status(200).send(userInfo);
});

app.listen(4000, () => console.log("UP & RUNNING"));
