import { useEffect, useState } from "react"
import { useNavigate, Link, useParams } from "react-router-dom"
import "./SongNewForm.css"
const API = import.meta.env.VITE_BASE_URL

function SongNewForm() {
  const navigate = useNavigate()
  const [songs, setSongs] = useState([])
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false
  })

  useEffect(()=> {
    fetch(`${API}/songs`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .catch(error => console.log(error,songs))
  }, [songs, navigate])

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
        navigate(`/songs/${songs[songs.length-1].id}`)
      })
      .catch((err) => console.error(err))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addSong()
  }
  return (
    <div className="New">
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
      <div>
          <Link to={`/songs`}>
            <button>Cancel</button>
          </Link>
      </div>
    </div>
  )
}

export default SongNewForm
