import css from './search.module.css';
import React from 'react'

function Name(props) {
    return (
        <div>
            <label className={css.label}>
                    Search keyword :
                    <input className={css.input} onChange ={props.props.nameHandler}></input>
                </label>
        </div>
    )
}

export default Name
