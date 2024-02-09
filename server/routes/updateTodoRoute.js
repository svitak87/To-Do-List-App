const { Router } = require("express");
const router = Router();
const updateTodo = require("../controllers/updateTodo");

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updatedTodo = await updateTodo(id, description);
    res
      .status(200)
      .json({ message: "The description has been updated succesfully" });
  } catch (error) {
    if (
      error.message ===
      "Error to update de todo, you must add specific characters and ID"
    ) {
      res.status(400).json({ error: error.message });
    } else if (error.message === "A description with that ID doesn't exist") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
});

module.exports = router;
