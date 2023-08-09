const db = require("../DB");

class ToDoController {
  async getTodo(req, res) {
    const all_todo = await db.query(`SELECT * FROM toDoElem`);
    res.json(all_todo.rows.sort((a, b) => a.todo_id - b.todo_id));
  }

  async setTodo(req, res) {
    const { title } = req.body;
    await db.query(
      `INSERT INTO toDoElem (title, done)
    VALUES ($1, false)`,
      [title]
    );
    res.json("complete");
  }

  async editTodo(req, res) {
    const { id, title } = req.body;
    await db.query(`UPDATE toDoElem SET title = $2 WHERE todo_id = $1`, [
      id,
      title,
    ]);
    res.json("complete");
  }

  async editCheck(req, res) {
    const { id, done } = req.body;
    await db.query(`UPDATE toDoElem SET done = $2 WHERE todo_id = $1`, [
      id,
      done,
    ]);
    res.json("complete");
  }

  async delToDo(req, res) {
    const { id } = req.body;
    await db.query(
      `DELETE FROM toDoElem
    WHERE todo_id = $1`,
      [id]
    );
    res.json("complete");
  }
}

module.exports = new ToDoController();
