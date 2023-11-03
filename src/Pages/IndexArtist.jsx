import Artists from "../Components/Artists"
import "./IndexArtist.css"

function IndexArtist(){
    return (
        <div className="ArtistIndex">
            <h1 className="artistTitleIndex">Artists Library </h1>
            <Artists />
        </div>
    )
}

export default IndexArtist