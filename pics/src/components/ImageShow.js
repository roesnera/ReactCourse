import "./imageShow.css";

function ImageShow({ url }) {
    console.log(url);
    return <img src={url} alt="search result" className="image"/>
}

export default ImageShow;