import React from "react"
import Connexion from "./Connexion.js"
import { Link } from 'react-router-dom'

function testCo(){
    window.location.href = "Connexion"
}

export default function Navbar() {
    return (
        <section data-bs-version="5.1" class="menu menu3 cid-tpwFhum2sr" once="menu" id="menu3-9">
    
        <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
            <div class="container-fluid">
                <div class="navbar-brand">
                    
                    <span class="navbar-caption-wrap"><a class="navbar-caption text-danger display-7" href="https://mobiri.se">Blague A Paaaart&nbsp;</a></span>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true"><li class="nav-item"><a class="nav-link link text-danger text-primary display-4" href="page1.html">Top Blagues</a></li>
                        <li class="nav-item dropdown"><a class="nav-link link dropdown-toggle text-danger display-4" href="https://mobiri.se" data-toggle="dropdown-submenu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Themes</a><div class="dropdown-menu" aria-labelledby="dropdown-undefined"><a class="dropdown-item text-danger display-4" href="https://mobiri.se">New Item</a><a class="dropdown-item text-danger display-4" href="https://mobiri.se">New Item</a><a class="dropdown-item text-danger display-4" href="https://mobiri.se">New Item</a></div></li>
                        <li class="nav-item"><a class="nav-link link text-danger display-4" href="https://mobiri.se"><span class="mbri-login mbr-iconfont mbr-iconfont-btn"></span>Connexion</a>
                        </li></ul>
                    
                    
                </div>
            </div>
        </nav>
    </section>
    )
}