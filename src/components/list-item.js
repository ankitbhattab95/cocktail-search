import React from 'react'
import {Dropdown} from 'react-bootstrap';

function ListItem(props) {
    return (
        <div>
            <Dropdown.Item onClick={props.itemClicked}>{props.list}</Dropdown.Item>
        </div>
    )
}

export default ListItem
