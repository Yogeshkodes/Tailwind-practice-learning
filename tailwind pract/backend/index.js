const express = require("express");
const mainRouter = require("./routes/index");
const app = express();

app.use("/app/v1", mainRouter);

const PORT = 3000;
