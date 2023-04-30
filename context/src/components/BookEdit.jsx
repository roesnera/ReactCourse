import { useState } from "react";
import useBooksContext from '../hooks/useBooksContext';

function BookEdit({ title, id }) {

    const [inpValue, setInpValue] = useState(title);
    const { editBook } = useBooksContext();

    const handleChange = (e) => {
        setInpValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editBook({ title: inpValue, id});
    }

    return <form onSubmit={handleSubmit} className="book-edit">
            <input className="input" onChange={handleChange} value={inpValue}/>
        </form>
}

export default BookEdit;