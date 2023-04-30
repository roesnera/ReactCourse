import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from '../hooks/useBooksContext';

function BookShow({ title, id }) {

    const [showEdit, setShowEdit] = useState(false);
    const { deleteBook, editBook } = useBooksContext();


    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    let content = <h3>{title}</h3>;

    const passbackEdit = (book) => {
        setShowEdit(!showEdit);
        editBook(book);
    }

    if(showEdit) {
        content = <BookEdit handleEdit={passbackEdit} id={id} title={title}/>
    }

    const handleClick = (e) => {
        e.preventDefault();
        deleteBook(id);
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