import { NavLink } from "react-router";

function Navbar() {
    return (
        <div style={{
            backgroundColor: "transparent",
            // position: "sticky",
            paddingLeft: "4rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            display: "flex",
            flexDirection: "horizontal"
        }}>
            <div style={{
                paddingLeft: "2rem",
                paddingRight: "2rem"
            }}>
               <NavLink to="/">Wastely</NavLink>
            </div>
            <div style={{
                paddingLeft: "2rem",
                paddingRight: "2rem"
            }}>
                <NavLink to="/map">Find Trashcans</NavLink>
            </div>
        </div>
    )
}

export default Navbar;