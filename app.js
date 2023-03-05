require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./router/userRouter");
const connectDb = require("./database/dbConfig");
app.use(express.json());
app.use("/", userRouter);
connectDb();
app.listen(process.env.PORT, console.log("listening..."));
