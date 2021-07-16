import axios from "axios";
import { useQuery } from "react-query";
import { QueryKeys } from "../query-keys";

export interface BookForm {
  title: string;
  author: string;
}

export interface Book extends BookForm {
  id: string;
}

export const BookRepo = {
  getList: async (): Promise<Book[]> => {
    const response = await axios.get("/books");
    return response.data;
  },
  get: async (id: string): Promise<Book> => {
    const response = await axios.get(`/books/${id}`);
    return response.data;
  },
  create: async (form: BookForm): Promise<void> => {
    await axios.post("/books", form);
  },
};

export function useBookList() {
  return useQuery(QueryKeys.bookList, BookRepo.getList);
}

export function useBook(id: string) {
  return useQuery([QueryKeys.book, id], () => BookRepo.get(id));
}
