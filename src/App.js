import React, { Component } from 'react'
import './App.css';
import SearchBox from './components/search-box';
import css from './components/search.module.css';
import Cocktail from './components/cocktail'
import axios from 'axios';
import {config} from './config/config'
import {constants} from './config/constants'
export class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
             menu: "Choose search criteria",
             keyword: null,
             title: "Choose from list",
             submit: false,
             fetchedData: null
        }
    }

    componentDidUpdate = () => {
        if(this.state.submit && this.state.menu === constants.category){
            const getDetails = async () => {
                let data = await  axios.get(config.filterByCategoryUrl+this.state.title)
                data = data.data
                this.setState({...this.state, fetchedData: data, submit: false})
            }
            getDetails()
        }
        else if(this.state.submit && this.state.menu === constants.ingredient){
            const getDetails = async () => {
                let data = await  axios.get(config.filterByIngredientUrl+this.state.title)
                data = data.data
                this.setState({...this.state, fetchedData: data, submit: false})
            }
            getDetails()
        }
        else if(this.state.submit && this.state.menu === constants.name){
            const getDetails = async () => {
                let data = await  axios.get(config.searchByKeywordUrl + this.state.keyword)
                data = data.data
                this.setState({...this.state, fetchedData: data, submit: false})
            }
            getDetails()
        }
    }

    menuClicked =(event)=>{
        this.setState({...this.state,
            menu : event.target.outerText,
            submit: false,
            title: "Choose from list"})
    }

    searchHandler = async ()=>{
        if([constants.category, constants.ingredient, constants.name].includes(this.state.menu)){
            this.setState({...this.state,submit: true})
        }
    }

    nameHandler = (event) => {
        this.setState({...this.state, keyword: event.target.value})
    }

    titleUpdate = (event) =>{
        this.setState({...this.state,
            submit:false,
            title:event.target.outerText
        })
    }

    render(){
        let result = null
        if(this.state.fetchedData){
            if(this.state.fetchedData.drinks){
                const data = this.state.fetchedData.drinks.map((el,i) => {
                    return <Cocktail data = {el} key={i}/>
                })
                result= (<div className={css.result}>{data}</div>)
            }
            else {
                result = "No result found"
            }
        }

        return (
        <React.Fragment>
            <div className="App">
             <SearchBox menu={this.state.menu}
              title = {this.state.title}
              keyword= {this.state.keyword}
              nameHandler = {this.nameHandler}
              searchHandler ={this.searchHandler}
              titleUpdate={this.titleUpdate}
              menuClicked={this.menuClicked}
              />
            </div >
                {result}
        </React.Fragment>
        );
    }
}

export default App;
