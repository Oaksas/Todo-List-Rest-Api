var dbConn = require("../../config/dbConfig");

var todo = (todo) => {
  this.title = todo.title;
  this.description = todo.description;
  this.createdAt = new Date();
  this.updatedAt = new Date();
  this.creator = todo.creator;
  this.Expired = todo.Expired;
};

//getAllTasks

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

module.exports = todo;
