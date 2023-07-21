import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

import { postRouter } from "./src/post/post-router.js";

const port = process.env.PORT ?? 3000;
const mongo = "mongodb://localhost:27017/admin";

const app = express();
app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload());
app.use("/api", postRouter);

const start = async () => {
  try {
    await mongoose.connect(mongo);
    app.listen(port, () => {
      console.log("server started port " + port);
    });
  } catch (error) {
    console.error(error);
  }
};

await start();
