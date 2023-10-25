import SongEditForm from "../Components/SongEditForm"
import "./Edit.css"

function Edit(){
    return (
        <div className="Edit" >
            <h2> Edit Song </h2>
            <br></br>
            <h3> <SongEditForm /></h3>
        </div>
    )
}

export default Edit