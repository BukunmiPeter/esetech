import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
 import profileRoute from "./routes/profile.js";
import projectRoute from "./routes/project.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

 app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/project", projectRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});