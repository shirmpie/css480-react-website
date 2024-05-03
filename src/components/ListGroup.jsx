function ListGroup() {
    const items = ["Apples", "Sushi", "BANANA"]


    return (
        <>
            <h1>Things I Like:</h1>
            <ul className="list-group">
                {items.map(item => 
                <li key={item}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;