import { useEffect, useState, useContext } from 'react';
import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import "./index.css";
import axios from "axios";
import BooksContext from './context/books';


function App() {
  const { fetchBooks } = useContext(BooksContext);
  
  useEffect(() => {
    fetchBooks();
  }, [])

  return (
    <div className='app'>
      <BookCreate />
      <BookList />
    </div>
  )
}

export default App
