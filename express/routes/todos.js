const express = require("express");
const { getAll, deleteTodo, create } = require("../controllers/todoController");

const todosRouter = express.Router();

todosRouter.get("/", getAll);
todosRouter.delete("/:id", deleteTodo);
todosRouter.post("/", create);

module.exports = todosRouter;
