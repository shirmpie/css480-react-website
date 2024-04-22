import { Navbar } from "./components/NavBar"
import { Outlet } from "react-router-dom"


export function Layout(){
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}