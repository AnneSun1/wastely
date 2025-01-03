import { useState } from "react";
import { NavLink } from "react-router";
import MenuIcon from '@mui/icons-material/Menu';
import "./styles/Navbar.css";
import logo from "../assets/logo-transparent-svg.svg";

function Navbar() {
    const [ menuOpen, setMenuOpen ] = useState(false)

    const toggleMenu = () => menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    return (
        <div className="nav-container">
            <div style={{paddingRight:"1rem", justifyContent: "left", width: "100%"}}>
                <NavLink to="/" style={{}}><img src={logo} style={{height: "80px", width: "80px"}}/></NavLink>
            </div>
             
            { menuOpen ? (
                <>
                    <div style={{
                        paddingLeft: "2rem",
                        paddingRight: "2rem"
                    }}>
                        <NavLink to="/" onClick={toggleMenu} className="nav-link">Wastely</NavLink>
                    </div>
                    <div style={{
                        paddingLeft: "2rem",
                        paddingRight: "2rem"
                    }}> 
                        <NavLink to="/map" onClick={toggleMenu} className="nav-link">Map</NavLink>
                    </div>
                </>
            ) : null}
            <button className="menu-icon" onClick={toggleMenu}>
                <MenuIcon />
            </button> 
           </div> 
        
    )
}

export default Navbar;