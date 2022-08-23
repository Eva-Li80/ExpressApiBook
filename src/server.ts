import express from "express";
import internal from "stream";

const app = express();

app.use(express.json());

const books: any = [
  {
    id: 1,
    title: "The green mile",
    author: "Stephen King",
  },
  {
    id: 2,
    title: "Titanic",
    author: "Walter Lord",
  },
];

app.get("/", (req, res) => {
  res.status(200).send(books);
});

app.get("/api/books/:id", (req, res) => {
  const book = books.find(
    (b: { id: number }) => b.id === parseInt(req.params.id)
  );
  if (!book) res.status(404).send("BookId not found");
  res.send(book);
});

app.listen(3000, () => {
  console.log("server is running on: http://localhost:3000");
});
