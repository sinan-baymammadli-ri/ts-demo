import { db } from "./db";
import { rest } from "msw";

const delay = 2000;

export const handlers = [
  rest.get("/books", (req, res, ctx) => {
    const books = db.book.getAll();

    return res(ctx.delay(delay), ctx.json(books));
  }),

  rest.get("/books/:bookId", (req, res, ctx) => {
    const book = db.book.findFirst({
      where: {
        id: {
          equals: req.params.bookId,
        },
      },
    });

    if (!book) {
      return res(ctx.delay(delay), ctx.status(404));
    }

    return res(ctx.delay(delay), ctx.json(book));
  }),

  rest.post("/books", (req, res, ctx) => {
    const { title, author } = req.body as any;

    const book = db.book.create({
      title,
      author,
    });

    return res(ctx.delay(delay), ctx.json(book));
  }),
];
