const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

//define APi routes
router.post("/createTodo", createTodo); // creates database entry
router.get("/getTodos", getTodo); // returns all database entries
router.get("/getTodos/:id", getTodoById); // returns an entry with specified id
router.put("/updateTodo/:id", updateTodo); // updates the entry with specified id
router.delete("/deleteTodo/:id", deleteTodo); // deelets specified entry

module.exports = router;
