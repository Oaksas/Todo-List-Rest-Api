const todoModel = require("../Models/TaskModel");

//Get All Tasks
exports.getAllTodoList = (req, res) => {
  console.log("DONE");
  todoModel.GetAllTodos((err, todo) => {
    console.log(todo);
  });
};
