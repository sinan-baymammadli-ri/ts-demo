import React from "react";
import { Link } from "react-router-dom";
import { useBookList } from "./data";

export function BookList() {
  const { data: books, isLoading, isError } = useBookList();

  return (
    <div>
      <h1>Book List</h1>

      {isLoading ? <p>Loading...</p> : null}
      {isError ? <p>Error happened</p> : null}
      {books ? (
        books.length > 0 ? (
          books.map((book) => (
            <Link key={book.id} to={`/books/${book.id}`}>
              <h3>{book.title}</h3>
            </Link>
          ))
        ) : (
          <p>No books found</p>
        )
      ) : null}
    </div>
  );
}
