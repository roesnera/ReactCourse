import "./imageList.css";
import ImageShow from "./ImageShow";


function ImageList({ images }) {
    const renderedImages = images?.map(element => {
        console.log(element)
        return <ImageShow key={element.id} url={element.urls.full}/>
    })
    return <div className="imageList">
        ImageList: 
            {renderedImages}
        </div>;
}

export default ImageList;