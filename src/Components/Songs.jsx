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
  const [albumOrder, setAlbumOrder] = useState(false)
  const [nameOrder, setNameOrder] = useState(false)
  const [favOrder, setFavOrder] = useState(false)

  const changeOrderN = () => {
    if(nameOrder===false){
      setNameOrder(true)
    fetch(`${API}/songs/?order=asc`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs/?order=asc')
    })
    .catch(error => console.log(error))
    }
    else{
      setNameOrder(false)
      fetch(`${API}/songs/?order=desc`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs/?order=desc')
    })
    .catch(error => console.log(error))
    }
  }

  const changeOrderArt = () => {
    if(artistOrder===false){
      setArtistOrder(true)
    fetch(`${API}/songs/?order=ascArt`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs/?order=ascArt')
    })
    .catch(error => console.log(error))
    }
    else{
      setArtistOrder(false)
      fetch(`${API}/songs/?order=descArt`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs/?order=descArt')
    })
    .catch(error => console.log(error))
    }
  }

  const changeOrderAl = () => {
    if(albumOrder===false){
      setAlbumOrder(true)
    fetch(`${API}/songs/?order=ascAl`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs/?order=ascAl')
    })
    .catch(error => console.log(error))
    }
    else{
      setAlbumOrder(false)
      fetch(`${API}/songs/?order=descAl`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs/?order=descAl')
    })
    .catch(error => console.log(error))
    }
  }

  const changeOrderFav = () => {
    if(favOrder===false){
      setFavOrder(true)
    fetch(`${API}/songs/?is_favorite=true`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs/?is_favorite=true')
    })
    .catch(error => console.log(error))
    }
    else{
      setFavOrder(false)
      fetch(`${API}/songs`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs')
    })
    .catch(error => console.log(error))
    }
  }

  const handleSubmitN = (event) => {
    // this prevents the PAGE from RELOADING;
    event.preventDefault()
    changeOrderN()
  }
  const handleSubmitArt = event => {
    event.preventDefault()
    changeOrderArt()
  }
  const handleSubmitAl = event => {
    event.preventDefault()
    changeOrderAl()
  }

  const handleSubmitFav = event => {
    event.preventDefault()
    changeOrderFav()
  }
  
  return (
    <div className="Songs" >
        <table className="table" >
          <tbody >
            <tr >
              <th > <button onClick={handleSubmitFav}>⭐</button> </th>
              <th > <button onClick={handleSubmitArt}>Artist</button> </th>
              <th > <button onClick={handleSubmitN}>Name</button> </th>
              <th > <button onClick={handleSubmitAl}>Album</button> </th>
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

