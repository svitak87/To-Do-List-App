const pool = require('../database/db');

//test git hub

const createTodo = async (description) => {
  try {
    if (!description) {
      throw new Error("The description is undefined");
    }
    const result = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    const newTodo = result.rows;
    return newTodo;
  } catch (error) {
    throw error;
  }
};

module.exports = createTodo;
