/* eslint-disable react-hooks/exhaustive-deps */
import React , {useEffect, useState} from 'react'
import {DropdownButton} from 'react-bootstrap';
import ListItem from './list-item';
import axios from 'axios'
import {config} from '../config/config'
import {constants} from '../config/constants'

const List = (props)=> {

    const [fetchedData, setFetchedData] = useState(null)
    let listItems = null
    let data = null

    useEffect( () => {
        if(props.props.menu === constants.category){
            const getDetails = async () => {
                data = await  axios.get(config.listCategoryUrl)
                data = data.data.drinks
                setFetchedData(data)
            }
            getDetails()
        }else if(props.props.menu === constants.ingredient){
            const getDetails = async () => {
                data = await  axios.get(config.listIngredientUrl)
                data = data.data.drinks
                setFetchedData(data)
            }
            getDetails()
        }
     }, [props.props.menu])

     if(props.props.menu === constants.category && fetchedData){
         listItems = fetchedData.map((el,i) =>{
             return <ListItem key={i} itemClicked={props.props.titleUpdate} list={el.strCategory}></ListItem>
         })
     }

     if(props.props.menu === constants.ingredient && fetchedData){
        listItems = fetchedData.map((el,i) =>{
            return <ListItem key={i} itemClicked={props.props.titleUpdate} list={el.strIngredient1}></ListItem>
        })
    }

    return (
        <div >
            <DropdownButton id="dropdown-basic-button"  variant="success" title = {props.props.title}>
                {listItems}
            </DropdownButton>
            <br/>
        </div>
    )
}

export default List
