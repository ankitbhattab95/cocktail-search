import React from 'react'
import {Button, Card, Dropdown} from 'react-bootstrap';
import css from './search.module.css';
import List from './list'
import Name from './name'
import {constants} from '../config/constants'

const SearchBox = (props) => {
    let result =null
    if([constants.category,constants.ingredient].includes(props.menu)){
        result = <List props={props}/>
    } else if([constants.name].includes(props.menu)){
        result = <Name props={props}/>
    }

    return (
        <Card className={css.card}>
            <Card.Header>Cocktail search</Card.Header>
            <Card.Body>
            <Card.Title>Search cocktails based on category, name or ingredients</Card.Title>
            <Card.Text>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {props.menu}
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <Dropdown.Item onClick = {props.menuClicked} value= {constants.category}>Category</Dropdown.Item>
                    <Dropdown.Item onClick = {props.menuClicked} value= {constants.name}>Name</Dropdown.Item>
                    <Dropdown.Item onClick = {props.menuClicked} value= {constants.ingredient}>Ingredient</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Card.Text>
            {result}
            <Button className={css.btn} variant="primary" onClick={props.searchHandler}>Search</Button>
            </Card.Body>
        </Card>
    )
}

export default SearchBox
