const pool = require('../database/db');

const getAllTodo = async () => {
    try {
        const results = await pool.query("SELECT * FROM todo");
        const allTodos = results.rows;
        return allTodos;
    } catch (error) {
        throw new Error("There's no descriptions")
    }
}

module.exports = getAllTodo;