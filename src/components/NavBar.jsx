
import { Link } from "react-router-dom"
export function Navbar(){
    return(
        <nav className="navbar">
            <a href="/#/" className="site-title">Shirlyn's Site</a>
            <ul>
                <li className="active">
                <Link to="/">Home</Link>
                </li>
                <li className="active">
                <Link to="/things_to_read" > Things to Read </Link>
                </li>
            </ul>
            
            </nav>
    )
}