import { Link } from "react-router-dom"
import "./Song.css"

function Song({ song, index }) {
  return (
    <tr  >
      <td >
        <input
          className="star"
          name="star"
          type="checkbox"
          checked={song.is_favorite}
          readOnly
        />
      </td>
      <td>
        {song.artist} 
      </td>
      <td className="link">
        <Link to={`/songs/${index}`}> {song.name}</Link>
      </td>
      <td>
        {song.time} 
      </td>
    </tr>
  )
}

export default Song
