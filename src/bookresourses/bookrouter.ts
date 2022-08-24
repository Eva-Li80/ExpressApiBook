import express from "express";

import {
  getAllBooks,
  getBookId,
  createBook,
  updateBook,
  deleteBook,
} from "./bookController";

/*all endpoints*/
const bookRouter = express.Router();
bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookId);
bookRouter.post("/", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
