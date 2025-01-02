import { NavLink } from "react-router"

function NoPage() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div style={{
                justifySelf: "center",
                paddingTop: "10rem",
                fontSize: "xx-large"
            }}>
                Page Not Found
            </div>
            <NavLink to="/" style={{
                textDecoration: "none"
            }}>Return home</NavLink>
        </div>
        
    )
}

export default NoPage