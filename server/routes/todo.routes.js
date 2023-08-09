const Router = require("express");
const router = new Router();
const ToDoController = require("../controller/todo.controller");

router.get("/getTodo", ToDoController.getTodo);
router.put("/setTodo", ToDoController.setTodo);
router.post("/editTodo", ToDoController.editTodo);
router.post("/editCheck", ToDoController.editCheck);
router.delete("/delToDo", ToDoController.delToDo);

module.exports = router;
