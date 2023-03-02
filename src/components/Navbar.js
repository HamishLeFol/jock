import React from "react"
import Connexion from "./Connexion.js"
import { Link } from 'react-router-dom'

function testCo(){
    window.location.href = "Connexion"
}

export default function Navbar() {
    return (
        <nav>
            <div className="nav-gauche">Blague à part</div>
            <div className="nav-droite">
                <br></br>
                <br></br>
                <ul>
                    <li>Top blagues</li>
                    <li>Themes</li>
                    <li> </li>
                </ul>
            </div>
        </nav> 
    )
}