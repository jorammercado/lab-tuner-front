import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import React from 'react'
import "./ArtistDetails.css"
import ArtistSong from "./ArtistSong";
const API = import.meta.env.VITE_BASE_URL

function ArtistDetails() {
    const [artist, setArtist] = useState({
        artist_img: "",
        artist_name: "",
        id: 0
    })  
    const [artistObj, setArtistObj] = useState({
        artist_img: "",
        artist_name: "",
        id: 0,
        allArtistSongs: []
    })  

    let navigate = useNavigate()
    let { index } = useParams()

    useEffect(() => {
        fetch(`${API}/artists/${index}/songs`)
            .then(response => response.json())
            .then(artistObj => {
                setArtistObj(artistObj)
            })
            .catch(() => navigate("/not-found"))
    }, [index, navigate])

    useEffect(() => {
        fetch(`${API}/artists/${index}`)
            .then(response => response.json())
            .then(artist => {
                setArtist(artist)
            })
            .catch(() => navigate("/not-found"))
    }, [index, navigate])


    const handleDelete = () => {
        const httpOptions = { "method": "DELETE" }
        fetch(`${API}/artists/${index}`, httpOptions)
            .then((res) => {
                alert("Artist was deleted!");
                navigate('/artists');
            })
            .catch((err) => console.error(err))
    }

    return (
        <article className="topArtist">
            <table className="tableArtist">
                <tbody>
                    <tr className="artistPic">
                        <th colSpan="4"> <img src={`${artist.artist_img}`} /> </th>
                    </tr>
                    <tr className="artistName">
                        <th colSpan="4"> Name: {artist.artist_name} </th>
                    </tr>
                </tbody>
                <tbody >
                    {   (artistObj.allArtistSongs)!==undefined?
                        artistObj.allArtistSongs.map((song, index) => {
                            return <ArtistSong key={song.id} artistSong={song} index={song.id} />
                        }):<tr><td>no songs from artist</td></tr>
                    }
                </tbody>
            </table>
            <div className="showNavigation">
                <Link to={`/artists`}>
                    <button>Back</button>
                </Link>
                <Link to={`/artists/${index}/edit`}>
                    <button>Edit</button>
                </Link>
                <Link to={`/artists`}>
                    <button onClick={handleDelete}>Delete</button>
                </Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </article>
    )
}

export default ArtistDetails
