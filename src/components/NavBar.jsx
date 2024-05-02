
import { Link } from "react-router-dom"
export function Navbar(){
    return(
        <>
            <Link to="/"style={{
                color: "white",
                margin: "40px",
                backgroundColor: "grey",
                borderRadius: "8px"
            }}>Home</Link>
            <Link to="/things_to_read" style={{
                color: "white",
                margin: "40px",
                backgroundColor: "grey",
                borderRadius: "8px"
            }}> Things to Read </Link>
        </>
    )
}