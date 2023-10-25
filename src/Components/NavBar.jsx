import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./NavBar.css"
const API = import.meta.env.VITE_BASE_URL

export default function NavBar() {
  const [songs, setSongs] = useState([])
  useEffect(()=> {
    fetch(`${API}/songs`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="navbar" > 
    
            <nav className="main">
                <h1>
                <Link to="/">Home </Link>
                </h1>
                <h1>
                <Link to="/songs">Songs </Link>
                </h1>
                <h1>
                {/* <button> */}
                <Link to="/songs/new">New Song</Link>
                {/* </button> */}
                </h1>
            </nav>
        
        <div className="name">
          <p>Tunner App</p>
        </div>
    </div>
  )
}
