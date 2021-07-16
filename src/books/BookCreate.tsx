import React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { BookRepo } from "./data";

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  author: HTMLInputElement;
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export function BookCreate() {
  const history = useHistory();
  const { mutate: createBook, isLoading } = useMutation(BookRepo.create, {
    onSuccess: () => {
      history.push("/books");
    },
  });

  function onSubmit(e: React.FormEvent<UsernameFormElement>) {
    e.preventDefault();

    const title = e.currentTarget.elements.title.value;
    const author = e.currentTarget.elements.author.value;

    createBook({ title, author });
  }

  return (
    <div>
      <h1>Create new book</h1>

      <form onSubmit={onSubmit}>
        <input name="title" placeholder="Title" required />
        <input name="author" placeholder="Author" required />

        <button disabled={isLoading}>
          {isLoading ? "Loading.." : "Create"}
        </button>
      </form>
    </div>
  );
}
