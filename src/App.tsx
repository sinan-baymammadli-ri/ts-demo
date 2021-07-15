import React from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { BookCreate } from "./books/BookCreate";
import { BookDetail } from "./books/BookDetail";
import { BookList } from "./books/BookList";

export function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 20 }}>
        <Link to="/books">Book list</Link>
        <Link to="/books/create">Create new book</Link>
      </nav>

      <main>
        <Switch>
          <Route path="/books" exact>
            <BookList />
          </Route>

          <Route path="/books/create">
            <BookCreate />
          </Route>

          <Route path="/books/:id">
            <BookDetail />
          </Route>

          <Route path="*">
            <Redirect to="/books" />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}
