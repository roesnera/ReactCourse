import React, { useState, useCallback } from 'react';
import axios from 'axios';

const BooksContext = React.createContext();

function Provider( { children } ) {
    const [books, setBooks] = useState([]);
  
    const fetchBooks = async () => {
      const newBooks = await axios("http://localhost:3001/books");
      setBooks(newBooks.data);
    }

    const stableFetchBooks = useCallback(
      fetchBooks,
      []
    )
  
    const createBook = async (title) => {
      
      await axios.post("http://localhost:3001/books", {title});
  
      await fetchBooks();
    }
  
    const editBook = async ({ id, title }) => {
  
      await axios.put(`http://localhost:3001/books/${id}`, {title});
  
      await fetchBooks();
    }
  
    const deleteBook = async (bookId) => {
      console.log(`deleting ${bookId}`);
  
      await axios.delete(`http://localhost:3001/books/${bookId}`);
  
      await fetchBooks();
    }
    

    return (
        <BooksContext.Provider value={{books, stableFetchBooks, createBook, editBook, deleteBook}}>
            { children }
        </BooksContext.Provider>
    )
}

export { Provider }
export default BooksContext;