const { Router } = require("express");
const router = Router();
const getAtodo = require("../controllers/getAtodo");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todoFound = await getAtodo(id);
    res.status(200).json(todoFound);
  } catch (error) {
    if (error.message === "It doesn't exist that todo with that ID.") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
});

module.exports = router;
