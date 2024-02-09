const express = require("express");
const morgan = require('morgan');
const app = express();
const cors = require("cors");
const PORT = 3001;
const createTodoRouter = require('./routes/createTodoRoute');
const getAllTodoRouter = require('./routes/getAllTodoRoute');
const getAtodoRouter = require('./routes/getAtodoRoute');
const updateTodoRouter = require('./routes/updateTodoRoute');
const deletedTodoRouter = require('./routes/deleteTodoRoute');

// prueba git hub
//MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//ROUTES

app.use('/api', createTodoRouter);
app.use('/api', getAllTodoRouter );
app.use('/api/todos', getAtodoRouter );
app.use('/api/todos', updateTodoRouter)
app.use('/api/todos', deletedTodoRouter)

app.listen(PORT, () => {
  console.log(`Server is runnig on port: ${PORT}`);
});
