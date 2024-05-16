import { Link } from "react-router-dom"
import pink_flowers from "../assets/pink_flowers.gif"
export function Interests() {
    return (
        <>
            <div className="interests">

            <h1><img className='interests-pink-flowers' src={pink_flowers} alt="pink_flowers" width="50" height="50"></img>    Interests    <img className='interests-pink-flowers' src={pink_flowers} alt="pink_flowers" width="50" height="50"></img></h1>
            <img className='interests-pink-flowers' src={pink_flowers} alt="pink_flowers" width="50" height="50"></img>    Interests    <img className='interests-pink-flowers' src={pink_flowers} alt="pink_flowers" width="50" height="50"></img>
            <h2>Cats</h2>
            <h2>Cats</h2>
            <h2>Cats</h2>
            </div>

        </>
    )
}
export default Interests