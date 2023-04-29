import { useState } from 'react';
import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import "./index.css"

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const newBookArray = [
      ...books,
      { id: Math.round(Math.random()*99999),
        title
      }
    ]
    setBooks(newBookArray);
  }

  const editBook = ({ id, title }) => {

    const newBooks = books.map((book) => {
      if(book.id === id){
        return {...book, title}
      }
      return book;
    })

    setBooks(newBooks);
    // do something to edit books array with new book
  }

  const deleteBook = (bookId) => {
    // console.log(`deleting ${bookId}`);

    const newBooks = books.filter((element) => element.id!==bookId);

    // console.log(newBooks)

    //TODO: incomplete funciton, determine logic for deleteBook
    setBooks(newBooks);
  }

  return (
    <div className='app'>
      <BookCreate onCreate={createBook} />
      <BookList books={books} handleEdit={editBook} handleDelete={deleteBook} />
    </div>
  )
}

export default App
