const express = require("express");

require("dotenv").config();
const usersRouter = require("./routes/users");
require("./db/conn");

const app = express();
const port = process.env.PORT || 6666;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
