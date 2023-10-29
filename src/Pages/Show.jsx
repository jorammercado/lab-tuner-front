import SongDetails from "../Components/SongDetails"
import "./Show.css"

function Show(){
    return (
        <div className="Show">
            <h1 className="title"> Song Details:</h1>
            <SongDetails />
        </div>
    )
}

export default Show