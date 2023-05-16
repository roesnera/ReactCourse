import "./Cube.css";

function Cube() {

    return (
        <div className="cube-container">
            <div className="cube">
                <div className="face front">1</div>
                <div className="face back">2</div>
                <div className="face left">3</div>
                <div className="face right">4</div>
                <div className="face top">5</div>
                <div className="face bottom">6</div>
            </div>
        </div>
    )

}

export default Cube;