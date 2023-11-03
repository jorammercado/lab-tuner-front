import { Link } from "react-router-dom"
import "./Artist.css"

function Artist({ artist_name, index, artist_img }) {
  return (
    <tr  >
      <td>
        {artist_name} 
      </td>
      <td className="link">
        <Link to={`/artists/${index}/songs`}> 
            <img src={`${artist_img}`} /> 
        </Link>
      </td>
    </tr>
  )
}

export default Artist
