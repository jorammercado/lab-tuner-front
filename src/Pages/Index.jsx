import Songs from "../Components/Songs"
import "./Index.css"

function Index(){
    return (
        <div className="Index">
            <h1 className="titleIndex">Songs Library </h1>
            <Songs />
        </div>
    )
}

export default Index