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
      //console.log(song)
      setSong(song)
      //test
      //navigate(`/songs/${index}`)
    })
    .catch(() => navigate("/not-found"))
  }, [index, navigate]);

  const handleDelete = () => {
    const httpOptions = {"method" : "DELETE"}
    fetch(`${API}/songs/${song.id}`, httpOptions)
      .then((res) => {
        //console.log(res)
        alert("hey - song was deleted!  Way to GO!");
        navigate('/songs');
      })
      .catch((err) => console.error(err))
  }

  return (
    <article className="top">

        <table className="table">
            <tbody>
            <tr>
            <td> <img src={`${song.album_img}`} /> </td>
            </tr>
            <tr>
            <td> Song: {song.name}</td>
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
            </tbody>
        </table>


      <div className="showNavigation">
        <div>
          
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          
          <Link to={`/songs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          
          <Link to={`/songs`}>
          <button onClick={handleDelete}>Delete</button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default SongDetails
