import React from "react";
import { useRouteId } from "../utils";
import { useBook } from "./data";

export function BookDetail() {
  const bookId = useRouteId();
  const { data: book, isLoading, isError } = useBook(bookId);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
      {isError ? <p>Error happened</p> : null}
      {book ? (
        <div>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ) : null}
    </div>
  );
}
