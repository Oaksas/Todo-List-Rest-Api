const express = require("express");
const app = express();

//import todo routes
const todoRoutes = require("./src/Routes/TaskRoutes");

//create todo routes
app.use("/api/v1/todos", todoRoutes);

// app.get("/todos/:id", (req, res) => {
//   const todo = { name: "todo1" };
//   res.status(200).send(todo);
// });
app.listen(4000, () => console.log("UP & RUNNING"));
