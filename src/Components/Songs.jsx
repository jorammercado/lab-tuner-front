import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import React from 'react'
import Song from "./Song";
import "./Songs.css"
const API = import.meta.env.VITE_BASE_URL

function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(()=> {
    fetch(`${API}/songs`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .catch(error => console.log(error,songs))
  }, [])

  return (
    <div className="Songs" >
        <table className="table" >
          <tbody >
            <tr >
              <th >  
                <Link to={`/songs/?order=asc`}>
                  <button>Artist</button>
                </Link>        
              </th>
              <th >Name</th>
              <th >Album</th>
            </tr>
          </tbody>
          <tbody >
            {songs.map((song, index) => {
              return <Song key={song.id} song={song} index={song.id} />;
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Songs

