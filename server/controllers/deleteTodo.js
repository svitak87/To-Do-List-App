const pool = require("../database/db");

const deleteTodo = async (id) => {
  try {
    const result = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    if (result.rows.length > 0) {
      const todoToDelete = result.rows[0];
      return todoToDelete;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = deleteTodo;
