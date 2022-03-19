const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/TaskController");

router.get("/", TaskController.getAllTodoList);

module.exports = router;
