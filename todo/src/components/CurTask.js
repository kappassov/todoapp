import React, { Component } from 'react'
import {Consumer} from "../context"
import axios from "axios"
export default class Table extends Component {
    style = () => {
        const {complete} = this.props.todo
        return {textDecoration: complete ? "line-through" : "none"}
    }
    toggle = (id, dispatch) => {
        dispatch({type: "Toggle", payload: id})
    }
    remove = (id, dispatch) => {
        axios.delete(`tasks/${id}`)
        .then(() => dispatch({type: "Remove", payload: id}))
        
    }
    render() {
        const{title, _id} = this.props.todo
        return (
            <Consumer >{value => {
                const{dispatch} = value
                return <h3 style = {this.style()}>
                        <i onClick = {this.remove.bind(this, _id, dispatch)}>x | </i> {title}
                        <input type="checkbox" onChange = {this.toggle.bind(this, _id, dispatch)} />
                    </h3>
            }}</Consumer>
           
        )
    }
}
