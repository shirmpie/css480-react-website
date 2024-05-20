import { Link } from "react-router-dom"
import pink_flowers from "../assets/pink_flowers.gif"
import BannerImage from '../assets/teal_mountains.png'
import Cat from '../assets/cat.png'
import Painting from '../assets/painting.png'
import Japan from '../assets/mt_fuji.png'
import "../index.css"


export function Interests() {
    return (
        <>
            <div className="interests">
                <div className="interestsContainer">
                    
                    <h1><img className='interests-pink-flowers' src={pink_flowers} alt="pink_flowers" width="50" height="50"></img>    Interests    <img className='interests-pink-flowers' src={pink_flowers} alt="pink_flowers" width="50" height="50"></img></h1>
                    
                    <div className="section">
                        <h2>Cats</h2>
                        <img className='interests-cat' src={Cat} alt="cat" width="50%" align-items="center"></img>
                        <p> Cats are cute, fun, fluffy and my favorite animal!</p>
                     </div>
                       
                     <div className="section">
                        <h2>Painting</h2>
                        <img className='interests-painting' src={Painting} width="50%"></img>
                        <p> Painting is one of my favorite hobbies to help me relax. I love painting landscapes.</p>
                    </div>

                    <div className="section">
                        <h2>Japan</h2>
                        <img className='interests-japan' src={Japan} width="50%"></img>
                        <p> Japan is a beautiful country with wonderful culture, food, and scenery. It's my number one must-visit place!</p>
                    
                    </div>

                </div>
            </div>
            

        </>
    )
}
export default Interests