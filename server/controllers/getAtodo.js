const pool = require("../database/db");

const getAtodo = async (id) => {
  try {
    const result = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    if (result.rows.length > 0) {
      const todoFound = result.rows[0];
      return todoFound;
    } else {
      throw new Error("It doesn't exist that todo with that ID.");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = getAtodo;
