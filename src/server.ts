import express from "express";
import internal from "stream";

const app = express();

app.use(express.json());

// interface Book {
//   id: number;
//   title: string;
//   author: string;
//   isbn: number;
//   pages: number;
//   published: number;
// }

let books: any = [
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

app.get("/", (req, res) => {
  res.status(200).send(books);
});

app.get("/api/books/:id", (req, res) => {
  const book = books.find(
    (b: { id: number }) => b.id === parseInt(req.params.id)
  );
  if (!book) res.status(404).send("BookId not found!");
  res.send(book);
});

app.post("/api/books", (req, res) => {
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
});

app.put("/api/books/:id", (req, res) => {
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
});

app.delete("/api/books/:id", (req, res) => {
  const id: number = parseInt(req.params.id);
  const deleteBook = books.find((book: { id: number }) => book.id == id);
  if (deleteBook) {
    const book = books.indexOf(deleteBook);
    books.splice(book, 1);
    res.status(200).json("Book deleted!");
  } else {
    res.status(404).json("book id could not be found..book is not deleted!");
  }
});

app.listen(3000, () => {
  console.log("server is running on: http://localhost:3000");
});
