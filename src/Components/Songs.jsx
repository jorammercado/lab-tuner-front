import { useEffect, useState } from "react"
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
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="Songs" >
        <table className="table" >
          <tbody >
            <tr >
              <th >Artist</th>
              <th >Name</th>
              <th >Time</th>
            </tr>
          </tbody>
          <tbody >
            {songs.map((song, index) => {
              return <Song key={index} song={song} index={index} />;
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Songs
