const todoModel = require("../Models/TaskModel");

//Get All Tasks
exports.getAllTodoList = (req, res) => {
  console.log("DONE");
  todoModel.GetAllTodos((err, todo) => {
    if (err) {
      res.send(err);
    } else {
      console.log("Tasks", todo);
      res.send(todo);
    }
  });
};

//Get Task by user
exports.getUserTask = (req, res) => {
  console.log("DONE");
  todoModel.GetUserTask(req.params.user, (err, todo) => {
    if (err) {
      res.send(err);
    } else {
      console.log("Tasks", todo);
      res.send(todo);
    }
  });
};

//Get all users
exports.getAllUsers = (req, res) => {
  console.log("DONE");
  todoModel.GetAllUsers((err, users) => {
    if (err) {
      res.send(err);
    } else {
      console.log("Users: ", users);
      res.send(users);
    }
  });
};

//create a new task
exports.createTask = (req, res) => {
  todoModel.createTask((err, task) => {
    if (err) {
      res.send(err);
    } else {
      console.log("created Task: ", task);
      res.send(task);
    }
  });
};
