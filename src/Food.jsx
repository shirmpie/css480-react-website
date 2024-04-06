function Food(){
    
    const food1 = "sushi";
    const food2 = "banana";
    const styles = {
        fontFamily: "Arial, Helvetica, sans-serif"
    }

    return(
        <div className="food">
        <h3 style={styles}>Things I like:</h3>
        <ul style={styles}>
            <li>apples</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
        </div>
    );
}

export default Food