
import { Link } from "react-router-dom"
export function Navbar(){
    return(
        <>
            <Link to="/"><button>Home</button></Link>
            <Link to="/things_to_read"><button>Things to Read</button> </Link>
        </>
    )
}