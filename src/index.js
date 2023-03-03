import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import Navbar from "./components/Navbar.js"
import Connexion from "./components/Connexion.js"
import Connexion2 from "./components/Connexion2.js"

// Bootstrap CSS
//import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
//import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
