const pool = require("../database/db");

const updateTodo = async (id, description) => {
  try {
    if (!id || !description) {
      throw new Error(
        "Error to update the todo. You must add specific characters and ID"
      );
    } else {
      const updateResult = await pool.query(
        "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
        [description, id]
      );

      const rowCount = updateResult.rowCount;
      
      if (rowCount > 0) {
        const updatedTodo = updateResult.rows;
        return updatedTodo;
      } else {
        throw new Error("A description with that ID doesn't exist");
      }
    }
  } catch (error) {
    throw error;
  }
};

module.exports = updateTodo;
