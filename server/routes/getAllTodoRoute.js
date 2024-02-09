const { Router } = require("express");
const router = Router();
const getAllTodo = require('../controllers/getAllTodo')

router.get('/todos', async (req, res) => {
    try {
        const allTodos = await getAllTodo();
        res.status(200).json(allTodos);
    } catch (error) {
        if(error.message === "There's no descriptions"){
            res.status(400).json({error: error.message})
        }else{
            res.status(500).json({error:"Internal server error"})
        }
    }
})

module.exports = router;