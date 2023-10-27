import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import React from 'react'
import Song from "./Song";
import "./Songs.css"
const API = import.meta.env.VITE_BASE_URL

function Songs() {
  let navigate = useNavigate()
  const [songs, setSongs] = useState([]);
  useEffect(()=> {
    fetch(`${API}/songs`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .catch(error => console.log(error))
  }, [])
  const [artistOrder, setArtistOrder] = useState(false)

  const changeOrder = () => {
    // console.log("test")
    if(artistOrder===false){
      setArtistOrder(true)
    fetch(`${API}/songs/?order=asc`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs/?order=asc')
    })
    .catch(error => console.log(error))
    }
    else{
      setArtistOrder(false)
      fetch(`${API}/songs/?order=desc`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs/?order=desc')
    })
    .catch(error => console.log(error))
    }

  }
  const handleSubmit = (event) => {
    // this prevents the PAGE from RELOADING;
    event.preventDefault()
    changeOrder()
  }
  //console.log(songs)
  return (
    <div className="Songs" >
        <table className="table" >
          <tbody >
            <tr >
              <th >  
                
                  <button onClick={handleSubmit}>Artist</button>
                       
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

