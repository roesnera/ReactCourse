import { useEffect, useState } from 'react';
import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import "./index.css";
import axios from "axios"

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const newBooks = await axios("http://localhost:3001/books");
    setBooks(newBooks.data);
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  const createBook = async (title) => {
    
    await axios.post("http://localhost:3001/books", {title});
    
    // console.log(newBook);

    await fetchBooks();
  }

  const editBook = async ({ id, title }) => {

    await axios.put(`http://localhost:3001/books/${id}`, {title});

    await fetchBooks();


    // const newBooks = books.map((book) => {
    //   if(book.id === id){
    //     return {...book, title}
    //   }
    //   return book;
    // })

    // setBooks(newBooks);
    // do something to edit books array with new book
  }

  const deleteBook = async (bookId) => {
    console.log(`deleting ${bookId}`);

    await axios.delete(`http://localhost:3001/books/${bookId}`);

    // console.log(deletedBook.data);

    await fetchBooks();

    // const newBooks = books.filter((element) => element.id!==bookId);

    // console.log(newBooks)

    //TODO: incomplete funciton, determine logic for deleteBook
    // setBooks(newBooks);
  }

  return (
    <div className='app'>
      <BookCreate onCreate={createBook} />
      <BookList books={books} handleEdit={editBook} handleDelete={deleteBook} />
    </div>
  )
}

export default App
