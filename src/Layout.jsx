import Footer from "./components/Footer"
import { Navbar } from "./components/NavBar"
import { Outlet } from "react-router-dom"


export function Layout(){
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
                <Footer/>
            </main>
        </>
    )
}