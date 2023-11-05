import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import React from 'react'
import Artist from "./Artist";
import "./Artists.css"
const API = import.meta.env.VITE_BASE_URL

function Artists() {
  let navigate = useNavigate()
  const [artists, setArtists] = useState([]);
  useEffect(()=> {
    fetch(`${API}/artists`)
    .then((response) => response.json())
    .then( artists => setArtists(artists))
    .catch(error => console.log(error))
  }, [])
  const [artistOrder, setArtistOrder] = useState(false)

  const changeOrderArt = () => {
    if(artistOrder===false){
      setArtistOrder(true)
    fetch(`${API}/artists/?order=asc`)
    .then((response) => response.json())
    .then( artists => setArtists(artists))
    .then((res) => {
      navigate('/artists/?order=asc')
    })
    .catch(error => console.log(error))
    }
    else{
      setArtistOrder(false)
      fetch(`${API}/artists/?order=desc`)
    .then((response) => response.json())
    .then( artists => setArtists(artists))
    .then((res) => {
      navigate('/artists/?order=desc')
    })
    .catch(error => console.log(error))
    }
  }
  const handleSortArt = event => {
    event.preventDefault()
    changeOrderArt()
  }
  
  return (
    <div className="Artists" >
        <table className="artistTable " >
          <tbody >
            <tr >
              <th > <button onClick={handleSortArt}>Artist {` \u21f3`}</button> </th>
              <th > Image  </th>
              
            </tr>
          </tbody>
          <tbody >
            {artists.map((artist, index) => {
              return <Artist artist_name={artist.artist_name} 
                             key={artist.id}
                             index={artist.id} 
                             artist_img={artist.artist_img} 
                     />
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Artists

