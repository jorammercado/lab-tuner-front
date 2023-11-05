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
  const [timeOrder, setTimeOrder] = useState(false)

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

  const changeOrderTime = () => {
    if(timeOrder===false){
      setTimeOrder(true)
    fetch(`${API}/songs/?order=ascTime`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs/?order=ascTime')
    })
    .catch(error => console.log(error))
    }
    else{
      setTimeOrder(false)
    fetch(`${API}/songs/?order=descTime`)
    .then((response) => response.json())
    .then( songs => setSongs(songs))
    .then((res) => {
      navigate('/songs/?order=descTime')
    })
    .catch(error => console.log(error))
    }
  }

  const handleSortN = (event) => {
    event.preventDefault()
    changeOrderN()
  }
  const handleSortArt = event => {
    event.preventDefault()
    changeOrderArt()
  }
  const handleSortAl = event => {
    event.preventDefault()
    changeOrderAl()
  }

  const handleSortFav = event => {
    event.preventDefault()
    changeOrderFav()
  }

  const handleSortTime = event => {
    event.preventDefault()
    changeOrderTime()
  }
  
  return (
    <div className="Songs" >
        <table className="table table-striped table-dark table-hover" >
          <tbody >
            <tr >
              <th > <button type="button" className="btn btn-primary" onClick={handleSortFav}> {`\u2605`} </button> </th>
              <th > <button type="button" className="btn btn-primary" onClick={handleSortArt}>Artist {` \u21f3`}</button> </th>
              <th > <button type="button" className="btn btn-primary" onClick={handleSortN}>Name {` \u21f3`}</button> </th>
              <th > <button type="button" className="btn btn-primary" onClick={handleSortTime}>Time{`\u21f3`}</button> </th>
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

