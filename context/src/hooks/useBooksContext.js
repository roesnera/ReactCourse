
import BooksContext from "../context/books";
import { useContext } from 'react';

export default function useBooksContext() {
    return useContext(BooksContext);
}