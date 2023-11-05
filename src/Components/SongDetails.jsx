import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import "./SongDetails.css"
const API = import.meta.env.VITE_BASE_URL

function SongDetails() {
  const [song, setSong] = useState([])
  let navigate = useNavigate()
  let { index } = useParams()

  useEffect(() => {
    fetch(`${API}/songs/${index}`)
    .then(response => response.json())
    .then(song => {
      setSong(song)
    })
    .catch(() => navigate("/not-found"))
  }, [index, navigate])

  const handleDelete = () => {
    const httpOptions = {"method" : "DELETE"}
    fetch(`${API}/songs/${song.id}`, httpOptions)
      .then((res) => {
        alert("hey - song was deleted!  Way to GO!");
        navigate('/songs');
      })
      .catch((err) => console.error(err))
  }

  return (
    <article className="top">
      <table className="table table-striped table-dark">
        <tbody>
          <tr>
            <td> <img src={`${song.album_img}`} /> </td>
          </tr>
          <tr>
            <td>Name: {song.name}</td>
          </tr>
          <tr>
            <td>Artist: {song.artist}  </td>
          </tr>
          <tr>
            <td>Album: {song.album}</td>
          </tr>
          <tr>
            <td>Run Time: {song.time}</td>
          </tr>
          <tr>
            <td>Favorite: {song.is_favorite?"Yes":"No"}</td>
          </tr>
          <tr>
            <td>Release Date:{song.release_date}</td>
          </tr>
        </tbody>
      </table>
      <div className="showNavigation">
          <Link to={`/artists/${song.artist_id}/songs`}>
            <button  type="button" className="btn btn-primary"  >Artist</button>
          </Link>
          <Link to={`/songs`}>
            <button  type="button" className="btn btn-primary"  >Songs</button>
          </Link>
          <Link to={`/songs/${index}/edit`}>
            <button  type="button" className="btn btn-primary" >Edit</button>
          </Link>
          <Link to={`/songs`}>
            <button  type="button" className="btn btn-primary"  onClick={handleDelete}>Delete</button>
          </Link>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </article>
  )
}

export default SongDetails
