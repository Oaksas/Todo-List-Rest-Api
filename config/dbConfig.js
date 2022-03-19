var mysql = require("mysql");

var db_con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
});

db_con.connect(function (err) {
  if (err) throw err;
  else {
    console.log("Connected!");
    db_con.query("CREATE DATABASE IF NOT EXISTS todo ", function (err, result) {
      if (err) {
        console.log(err);
      }
      // console.log("Database created");
    });
  }
});

module.exports = db_con;

/**
 * CREATE TABLE `todo`.`todos` ( `id` INT(255) NOT NULL AUTO_INCREMENT , `title` VARCHAR(255) NOT NULL , `description` TEXT NOT NULL , `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , `Expired` BOOLEAN NOT NULL DEFAULT FALSE , PRIMARY KEY (`id`) )
 */
