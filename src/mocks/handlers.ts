import { db } from "./db";
import { rest } from "msw";
import { BookForm } from "../books/data";

const delay = 2000;

export const handlers = [
  rest.post<BookForm>("/books", (req, res, ctx) => {
    const book = db.book.create(req.body);

    return res(ctx.delay(delay), ctx.json(book));
  }),

  rest.get("/books", (_, res, ctx) => {
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
];
