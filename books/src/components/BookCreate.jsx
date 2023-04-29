import { useState } from "react";
import PropTypes from "prop-types";


function BookCreate({ onCreate }) {
    const [inputValue, updateValue] = useState("");

    const handleChange = (event) => {
        updateValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(inputValue);
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

BookCreate.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default BookCreate;