import "./searchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [searchTerm, updateSearchTerm] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchTerm);
    }

    const handleChange = (e) => {
        const val = e.target.value;
        updateSearchTerm(val);
    }

    return <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter search term</label>
                <input value={searchTerm} onChange={handleChange}/>
                {searchTerm.length < 3 ? 'Term must be longer': null}
            </form>
        </div>;
}

export default SearchBar;