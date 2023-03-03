
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Switch } from 'react-router-dom'

import './App.css';
//import React from "react"
import Navbar from "./components/Navbar.js"
import Connexion from "./components/Connexion.js"
import Inscription from "./components/Inscription.js"
import Footer from "./components/Footer.js"
import AfficherRestaurant from "./components/AfficherRestaurant.js"
import PosterBlague from './components/PosterBlague';




function App() {
    return (
        <div>

            <Navbar/>
            <PosterBlague />
            <Footer />
        </div>
)}



export default App;
