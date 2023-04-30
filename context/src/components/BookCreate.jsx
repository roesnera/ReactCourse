import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import BooksContext from "../context/books";


function BookCreate() {
    const [inputValue, updateValue] = useState("");
    const { createBook } = useContext(BooksContext);

    const handleChange = (event) => {
        updateValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(inputValue);
        updateValue("");
    }


    return <div className="book-create">
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={inputValue} onChange={handleChange}/>
        </form>
    </div>
}

export default BookCreate;