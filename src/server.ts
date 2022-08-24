import express from "express";
import bookRouter from "./bookresourses/bookrouter";

const app = express();
app.use(express.json());
app.use("/api/books", bookRouter);

app.listen(3000, () => {
  console.log("server is running on: http://localhost:3000");
});
