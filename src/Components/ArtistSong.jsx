import { Link } from "react-router-dom"
import "./ArtistSong.css"

function ArtistSong({ artistSong, index }) {
  return (
    <tr  >
      <td >
        <input
          className="star"
          name="star"
          type="checkbox"
          checked={artistSong.is_favorite}
          readOnly
        />
      </td>
      <td className="link">
        <Link to={`/songs/${index}`}> {artistSong.name}</Link>
      </td>
      <td>
        {artistSong.time} 
      </td>
    </tr>
  )
}

export default ArtistSong
