import { Link } from "react-router-dom"
import "./Song.css"

function Song({ song, index }) {
  return (
    
    <tr  >
        <td >
          <input
          className="star"
          id="is_favorite"
          type="checkbox"
          checked={song.is_favorite}
          readOnly
        />
        </td>
        <td>
        {song.artist} 
        </td>
        <td className="link">
            <Link to={`/songs/${index}`}> {song.name} </Link>
      </td>
      <td>
      {song.album} 
      </td>
      
    </tr>

    
  )
}

export default Song
