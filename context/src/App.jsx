import { useCallback, useEffect } from 'react';
import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import "./index.css";
import axios from "axios";
import useBooksContext from './hooks/useBooksContext';


function App() {
  const { stableFetchBooks } = useBooksContext();
  
  useEffect(() => {
    stableFetchBooks();
  }, [stableFetchBooks])

  return (
    <div className='app'>
      <BookCreate />
      <BookList />
    </div>
  )
}

export default App
