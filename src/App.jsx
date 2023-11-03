
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Edit from "./Pages/Edit"
import FourOFour from "./Pages/FourOFour"
import Home from "./Pages/Home"
import Index from "./Pages/Index"
import IndexArtist from "./Pages/IndexArtist"
import ShowArtist from "./Pages/ShowArtist"
import New from "./Pages/New"
import Show from "./Pages/Show"
import PlaceHolder from "./Pages/PlaceHolder"

import NavBar from "./Components/NavBar"
import "./App.css"

function App() {
  return (
    <div className="App">
      
      <Router>
      <div className="nav">
        <NavBar />
      </div>
      
        <main className="main">
          <Routes>
            <Route path="/" element ={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/artists" element={<IndexArtist />} />
            <Route path="/artists/:index/songs" element={<ShowArtist />} />
            <Route path="/songs/placeHolder" element={<PlaceHolder />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:index" element={<Show />} />
            <Route path="/songs/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
