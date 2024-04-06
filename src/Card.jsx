import profilePic from './assets/profile.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" width="300" height="400"></img>
            <h1 className='card-title'>Hello World!</h1>
            <h2 className='card-subtitle'>Hi, I'm Shirlyn Shih</h2>
            <p className='card-text'>I'm a junior at UWB, majoring in Applied Computing.</p>

        </div>
    )
}

export default Card