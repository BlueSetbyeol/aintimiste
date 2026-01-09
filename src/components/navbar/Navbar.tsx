import "./Navbar.css"
import logo from '../../assets/img/logo-horizontale.svg';
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to ="/">
                    <img src={logo} alt="Aintimiste" />
                </Link>
            </div>
            <div className="navbar-right">
                <a href="#reserver">RÉSERVER UNE TABLE</a>
                <Link to ="/producteurs-territoire">
                    PRODUCTEURS & TERRITOIRES
                </Link>
                <a href="#carte">CARTE & MENUS</a>
            </div>
        </nav> )
}