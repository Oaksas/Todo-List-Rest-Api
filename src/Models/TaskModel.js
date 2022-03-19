var dbConn = require("../../config/dbConfig");

var todo = (todo) => {
  this.title = todo.title;
  this.description = todo.description;
  this.createdAt = new Date();
  this.updatedAt = new Date();
  this.creator = todo.creator;
  this.Expired = todo.Expired;
};

//getAllTasks Model

todo.GetAllTodos = (result) => {
  dbConn.query("SELECT * FROM todos", (err, res) => {
    if (err) {
      console.log("Error...");
      result(null, err);
    } else {
      console.log("SUCCESS....");
      result(null, res);
    }
  });
};

//getAll User Tasks model
todo.GetUserTask = (creator, result) => {
  dbConn.query("SELECT * FROM todos WHERE Creator=?", creator, (err, res) => {
    if (err) {
      console.log("Error getting user task...");
      result(null, err);
    } else {
      console.log("SUCCESS getting user task....");
      result(null, res);
    }
  });
};

//get all users
todo.GetAllUsers = (result) => {
  dbConn.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("Error getting users...");
      result(null, err);
    } else {
      console.log("SUCCESS getting users....");
      result(null, res);
    }
  });
};

//create new task
todo.createTask = (result) => {
  dbConn.query("SELECT * FROM user", (err, res) => {
    if (err) {
      console.log("Error getting users...");
      result(null, err);
    } else {
      console.log("SUCCESS getting users....");
      result(null, res);
    }
  });
};

module.exports = todo;
