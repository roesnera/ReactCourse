import "./imageShow.css";

function ImageShow({ url, alt }) {
    console.log(url);
    return <img src={url} alt={alt} className="image"/>
}

export default ImageShow;