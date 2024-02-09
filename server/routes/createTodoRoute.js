const { Router } = require("express");
const router = Router();
const createTodo = require("../controllers/createTodo");

router.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await createTodo(description);
    res.status(200).json(newTodo);
  } catch (error) {
    if (error.message === "La descripción no está definida.") {
      res.status(400).json({ error: error.message });
    } else {
      console.error("Error al crear la tarea:", error.message);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
});
module.exports = router;
