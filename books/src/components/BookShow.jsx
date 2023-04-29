import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ title, id, handleEdit, handleDelete }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleClick = () => {
        handleDelete(id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    let content = <h3>{title}</h3>;

    const passbackEdit = (book) => {
        setShowEdit(!showEdit);
        handleEdit(book);
    }

    if(showEdit) {
        content = <BookEdit handleEdit={passbackEdit} id={id} title={title}/>
    }

    return <div className="book-show">
        <img src={`https://picsum.photos/seed/${id}/300/200`} alt="books" />
        {content}
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleClick}>Delete</button>
        </div>
        </div>
}

export default BookShow;