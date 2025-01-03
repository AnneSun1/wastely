import { NavLink } from "react-router";
import MenuIcon from '@mui/icons-material/Menu';
import "./styles/Navbar.css";
import logo from "../assets/logo-transparent-svg.svg";

function Navbar() {
    return (
        <div className="nav-container">
            <div style={{paddingRight:"1rem", justifyContent: "left", width: "100%"}}>
                <NavLink to="/" style={{borderStyle: "solid"}}><img src={logo} style={{height: "80px", width: "80px"}}/></NavLink>
            </div>
            <div>
                <MenuIcon/>
            </div>
            
            {/* <div style={{
                paddingLeft: "2rem",
                paddingRight: "2rem"
            }}> */}
               {/* <NavLink to="/" className="nav-link">Wastely</NavLink> */}
            {/* </div>
            <div style={{
                paddingLeft: "2rem",
                paddingRight: "2rem"
            }}> */}
                {/* <NavLink to="/map" className="nav-link">Find Trashcans</NavLink> */}
            {/* </div> */}
        </div>
    )
}

export default Navbar;