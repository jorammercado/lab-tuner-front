import { Link } from "react-router-dom"
import "./NavBar.css"
const API = import.meta.env.VITE_BASE_URL

export default function NavBar() {
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
          <Link to="/artists">Artists </Link>
        </h1>
        <h1>
          <Link to="/songs/new">New Song</Link>
        </h1>
      </nav>
      <div className="name">
        <h1>Tuner App</h1>
      </div>
    </div>
  )
}
