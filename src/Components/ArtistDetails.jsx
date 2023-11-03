import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import React from 'react'
import "./ArtistDetails.css"
import Song from "./Song";
const API = import.meta.env.VITE_BASE_URL

function ArtistDetails() {
    const [artistObj, setArtistObj] = useState({
        allArtistSongs: [],
        artist_img: "",
        artist_name: "",
        id: 0
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
                    <tr>
                        <td> <img src={`${artistObj.artist_img}`} /> </td>
                    </tr>
                    <tr>
                        <td>Name: {artistObj.artist_name}</td>
                    </tr>
                </tbody>
                <tbody >
                    {console.log(artistObj)}
                    {console.log(artistObj.allArtistSongs)}
                    {console.log( (artistObj.allArtistSongs)[0] )}
                    { 
                        (artistObj.allArtistSongs).map((song, index) => {
                        return <Song key={song.id} song={song} index={song.id} />
                    })
               
                
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
