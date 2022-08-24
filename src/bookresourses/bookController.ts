import { Request, Response } from "express";
import { Book } from "./bookInterface";

let books: Book[] = [
  /*takes in interface. Added 3 books so that there is something in the array from the start*/
  {
    id: 1,
    title: "The green mile",
    author: "Stephen King",
    isbn: 9780575084346,
    pages: 448,
    published: 2008,
  },
  {
    id: 2,
    title: "Titanic: the story of the disaster at sea ",
    author: "Joe Fullman",
    isbn: 9789179856144,
    pages: 450,
    published: 1998,
  },
  {
    id: 3,
    title: "will Hunting",
    author: "Matt Damon and Ben Affleck",
    isbn: 9780571196111,
    pages: 192,
    published: 2022,
  },
];

/*all methods*/
export const getAllBooks = (req: Request, res: Response) => {
  res.status(200).send(books);
};

export const getBookId = (req: Request, res: Response) => {
  const book = books.find(
    (b: { id: number }) => b.id === parseInt(req.params.id)
  );
  if (!book) res.status(404).send("BookId not found!");
  res.send(book);
};

export const createBook = (req: Request, res: Response) => {
  if (!req.body.title || req.body.title.length < 3) {
    res.status(404).send("Must contain at least 3 letters..");
    return;
  }
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
    pages: req.body.pages,
    published: req.body.published,
  };
  books.push(book);
  res.send(book);
};

export const updateBook = (req: Request, res: Response) => {
  let id = +req.params.id;
  let body = req.body;
  let index = books.findIndex((b: { id: number }) => b.id === id);
  if (index >= 0) {
    let updatebook = { id: id, ...body };
    books[index] = updatebook;
    res.send(updatebook);
  } else {
    res
      .sendStatus(404)
      .send("book id could not be found..book is not updated!");
  }
};

export const deleteBook = (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const deleteBook = books.find((book: { id: number }) => book.id == id);
  if (deleteBook) {
    const book = books.indexOf(deleteBook);
    books.splice(book, 1);
    res.status(200).json("Book deleted!");
  } else {
    res.status(404).json("book id could not be found..book is not deleted!");
  }
};
