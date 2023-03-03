import './App.css';
//import React from "react"
import { Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Connexion from "./components/Connexion.js"
import Connexion2 from "./components/Connexion2.js"

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
            <Router>
                <Routes>
                    <Route path='/connexion2' element={<Connexion2/>} />
                    <Route path='/connexion' element={<Connexion/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
