import SongNewForm from "../Components/SongNewForm"
import "./New.css"

function New(){
    return (
        <div className="New" >
            <h2> New Song </h2>
            <br></br>
            <h3><SongNewForm /> </h3>
        </div>
    )
}

export default New