import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'
import Food from '../components/Food.jsx'
import Card from '../components/Card.jsx'
import { Link } from 'react-router-dom'

export function Home(){
    return (
        <>
            <Card/>
            <Button/>
            <Food/>
            <Footer/>
        </>
    )
}
export default Home