import { useState } from "react";

function BookEdit({ title, id, handleEdit}) {

    const [inpValue, setInpValue] = useState(title);

    const handleChange = (e) => {
        setInpValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit({ title: inpValue, id});
    }

    return <form onSubmit={handleSubmit} className="book-edit">
            <input className="input" onChange={handleChange} value={inpValue}/>
        </form>
}

export default BookEdit;