const { Router } = require("express");
const router = Router();
const deleteTodo = require("../controllers/deleteTodo");

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await deleteTodo(id);
    res
      .status(200)
      .json({ message: "The todo description was succesfully deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
