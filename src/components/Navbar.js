import { Link } from 'react-router-dom';
import Connexion from "./Connexion.js"
import Connexion2 from "./Connexion2.js"

export default function Navbar() {
    
    return (
        <nav>
            <div className="nav-gauche">Blague à part</div>
            <div className="nav-droite">
                <ul>
                    <li>Top blagues</li>
                    <li>Themes</li>
                    <li><Link to='/connexion'>Connexion</Link></li>
                    <li><Link to='/connexion2'>Connexion2</Link></li>
                </ul>
            </div>
        </nav>
    )
}