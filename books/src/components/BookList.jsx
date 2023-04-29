
// import PropTypes from "prop-types";
import BookShow from "./BookShow";

function BookList({ books, handleEdit, handleDelete }) {

    const renderedBooks = books.map(({ title, id }) => <BookShow title={title} key={id} id={id} handleDelete={handleDelete} handleEdit={handleEdit} />)
    
    return <div className="books-list">
        {renderedBooks}
    </div>
}

// BookList.propTypes = { books: PropTypes.array.isRequired }

export default BookList;