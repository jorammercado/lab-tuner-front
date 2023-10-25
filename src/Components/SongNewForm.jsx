import { useState } from "react"
//import { Link, useParams, useNavigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom"
import "./SongNewForm.css"
const API = import.meta.env.VITE_BASE_URL

function SongNewForm() {
  const navigate = useNavigate()
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false
  })

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value })
  }

  const handleCheckboxChange = () => {
    setTransaction({ ...song, is_favorite: !song.is_favorite })
  }

  const addSong = () => {
    const httpOptions = {
      "method" : "POST",
      "body" : JSON.stringify(song),
      "headers" : {
        "Content-type" : "application/json"
      }
    }
    fetch(`${API}/songs`, httpOptions)
      .then((res) => {
        const index = res.url.split("/")[res.url.split("/").length-1]
        //console.log(index)
        //alert(`${song.name} was added to the database!`)
        navigate(`/songs/${index}`)
      })
      .catch((err) => console.error(err))
  }

  const handleSubmit = (event) => {
    // this prevents the PAGE from RELOADING;
    event.preventDefault()
    addSong()
  }
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label className="name" htmlFor="name">Song: </label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="song"
          required
        />
        <br></br>
        <label className="artist" htmlFor="artist">Artist:</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="artist"
          required
        />
        <br></br>
        <label className="album" htmlFor="album">Artist:</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          placeholder="album"
        />
        <br></br>
        <label className="time" htmlFor="time">RunTime:</label>
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleTextChange}
          placeholder="run time"
        />
        <br></br>
        <label id="is_favorite" htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          checked={song.is_favorite}
          onChange={handleCheckboxChange}
        />
        <br />
        <input type="submit" />
      </form>
      <div>
          <Link to={`/songs`}>
            <button>Cancel</button>
          </Link>
      </div>
    </div>
  )
}

export default SongNewForm
