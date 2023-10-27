import Songs from "../Components/Songs"
import "./PlaceHolder.css"

function PlaceHolder(){
    return (
        <div className="PlaceHolder">
            <h1>PlaceHolder: </h1>
            <Songs />
        </div>
    )
}

export default PlaceHolder