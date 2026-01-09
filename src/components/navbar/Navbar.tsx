import "./Navbar.css"
import logo from '../../assets/img/logo-horizontale.svg';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Aintimiste" />
            </div>
            <div className="navbar-right">
                <a href="#reserver">RÉSERVER UNE TABLE</a>
                <a href="#offrir">PRODUCTEUR & TERRITOIRE</a>
                <a href="#carte">CARTE & MENUS</a>
            </div>
        </nav> )
}