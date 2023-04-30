import { useState } from "react";
import useBooksContext from '../hooks/useBooksContext';


function BookCreate() {
    const [inputValue, updateValue] = useState("");
    const { createBook } = useBooksContext();

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