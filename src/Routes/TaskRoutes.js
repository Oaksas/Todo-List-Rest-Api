const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/TaskController");

router.get("/", TaskController.getAllTodoList);
router.get("/users/", TaskController.getAllUsers);
router.post("/", TaskController.createTask);
router.get("/tasks/:user", TaskController.getUserTask);

module.exports = router;
