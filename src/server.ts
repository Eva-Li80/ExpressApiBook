import express from "express";
import bookRouter from "./bookresourses/bookrouter";

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path); /*logging out method and path*/
  next();
});

app.use("/api/books", bookRouter);

app.use(function (req, res) {
  res.status(404).end("Sorry something went wrong..");
});

app.listen(3000, () => {
  console.log("server is running on: http://localhost:3000");
});
