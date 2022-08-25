import express from "express";
import bookRouter from "./bookresourses/bookrouter";

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.use(express.static("./public"));

app.use("/api/books", bookRouter);

app.listen(3000, () => {
  console.log("server is running on: http://localhost:3000");
});
