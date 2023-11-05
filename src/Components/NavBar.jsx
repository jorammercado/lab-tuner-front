import { Link } from "react-router-dom"
import "./NavBar.css"
const API = import.meta.env.VITE_BASE_URL

export default function NavBar() {
  return (
    <div className="navbar" >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <h1>
            <Link to="/">Home </Link>
          </h1>
          <h1>
            <Link to="/songs">Songs </Link>
          </h1>
          <h1>
            <Link to="/artists">Artists </Link>
          </h1>
          <h1>
            <Link to="/songs/new">New Song</Link>
          </h1>
          <span className="navbar-text">
          
            TunerApp
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-music-note" viewBox="0 0 16 16">
  <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fillRule="evenodd" d="M9 3v10H8V3h1z"/>
  <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
</svg>
          </span>
          
        </div>
      </nav>
    </div>
  )
}
