import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import "./SongEditForm.css"
const API = import.meta.env.VITE_BASE_URL

function SongEditForm() {
  let { index } = useParams()
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
    setSong({ ...song, is_favorite: !song.is_favorite })
  }

  useEffect(() => {
    fetch(`${API}/songs/${index}`)
      .then(response => response.json())
      .then(song => {
        setSong(song)
    })
    .catch(() => navigate("/not-found"))
  }, [index, navigate]);

  const updateSong = () => {
    const httpOptions = {
      "method" : "PUT",
      "body" : JSON.stringify(song),
      "headers" : {
        "Content-type" : "application/json"
      }
    }

      fetch(`${API}/songs/${song.id}`, httpOptions)
        .then(() => { 
          alert(`${song.name} has been updated!`)
          navigate(`/songs/${song.id}`)
        })
        .catch((err) => console.error(err))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    updateSong()
  }
  return (
    <div className="Edit">
      
      <form onSubmit={handleSubmit}>
      <label className="nameSong" htmlFor="name">Song: </label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="song"
          autoComplete="off"
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
          readOnly
          required
        />
        <br></br>
        <label className="album" htmlFor="album">Album:</label>
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
        <label id="check" htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          checked={song.is_favorite}
          onChange={handleCheckboxChange}
        />
        <br />
        <input type="submit" />
      </form>

      <br></br>
      <Link to={`/songs/${index}`}>
        <button>Cancel</button>
      </Link>
      <Link to={`/songs`}>
        <button>Songs</button>
      </Link>
      
    </div>
  )
}

export default SongEditForm
