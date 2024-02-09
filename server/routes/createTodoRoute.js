const { Router } = require("express");
const router = Router();
const createTodo = require("../controllers/createTodo");

router.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await createTodo(description);
    res.status(200).json(newTodo);
  } catch (error) {
    if (error.message === "The description is undefined") {
      res.status(400).json({ error: error.message });
    } else {
      console.error("Error to create the description:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});
module.exports = router;
