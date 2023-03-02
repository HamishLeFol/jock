import logo from './logo.svg';
import './App.css';
//import React from "react"
import Navbar from "./components/Navbar.js"
import Connexion from "./components/Connexion.js"
import Inscription from "./components/Inscription.js"
import PosterBlague from "./components/PosterBlague.js"
import Footer from "./components/Footer.js"

import "./assets/web/assets/mobirise-icons/mobirise-icons.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/css/bootstrap-grid.min.css";
import "./assets/bootstrap/css/bootstrap-reboot.min.css";
import "./assets/dropdown/css/style.css";
import "./assets/socicon/css/styles.css";
import "./assets/theme/css/style.css";
import "./assets/mobirise/css/mbr-additional.css"


function App() {    
    return (
        <div>
            <Navbar />
            <PosterBlague/>
            <Footer/>
            
            <section>
            </section>
        </div>
    )
}

export default App;
