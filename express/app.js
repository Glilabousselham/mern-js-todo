const express = require("express");
const cors = require("cors");
const todosRouter = require("./routes/todos");
const loggerMiddleware = require("./middlewares/loggerMiddleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use("/todos", todosRouter);

app.listen(3001, function () {
    console.log(`server running`);
});
