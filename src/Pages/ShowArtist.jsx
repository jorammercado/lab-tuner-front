import ArtistDetails from "../Components/ArtistDetails"
import "./ShowArtist.css"

function ShowArtist(){
    return (
        <div className="ShowArtist">
            <h1 className="titleShowArtist"> Artist Details</h1>
            <ArtistDetails />
        </div>
    )
}

export default ShowArtist