import React from 'react'
import {Card} from 'react-bootstrap';


function Cocktail(props) {
    return (
        <div >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.data.strDrinkThumb} />
            <Card.Body>
                <Card.Title style={{textAlign:'center'}}>{props.data.strDrink}</Card.Title>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Cocktail
