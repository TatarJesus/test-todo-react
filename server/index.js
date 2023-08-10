const session = require("express-session");
const express = require("express");
const toDoRouter = require("./routes/todo.routes");
const PORT = process.env.PORT || 3100;

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.set("trust proxy", 1);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(express.json());
app.use("/todo", toDoRouter);

app.listen(PORT, () => {
  console.log(PORT);
});
