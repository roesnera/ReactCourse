import { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
    const [images, updateImages] = useState(null);

    const handleSubmit = async (term) => {
        // console.log('do a search with', term);
        const result = await searchImages(term);
        // console.log(result);
        updateImages(result);
    }


    return <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images} />
        </div>;
}

export default App;