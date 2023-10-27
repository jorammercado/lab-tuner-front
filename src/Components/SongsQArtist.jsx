import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import React from 'react'
import Song from "./Song";
import "./SongsQArtist.css"
const API = import.meta.env.VITE_BASE_URL

function SongsQArtist() {
  const [songs, setSongs] = useState([]);
  useEffect(()=> {
    fetch(`${API}/songs/?order=asc`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .catch(error => console.log(error,songs))
  }, [])
  console.log(songs)
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

export default SongsQArtist

