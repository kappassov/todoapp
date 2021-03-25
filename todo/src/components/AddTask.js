import React, {Component} from 'react'
import {Consumer} from "../context"
import axios from "axios"
export default class AddTask extends Component {
    state = {
        id: 4,
        title: "", 
        complete: false
    }
    update = (e) =>{
        this.setState({
            title: e.target.value
        })
    }
    add = (dispatch, e) => {
        e.preventDefault()
        const newTodo = this.state
        axios.post('/tasks', newTodo)
        .then(res => dispatch({type: "Add", payload: res.data} ))
        this.setState({title: ""})
    }
    render(){
        return (
            <Consumer>{value =>{
                const {dispatch} = value 
                return <form onSubmit={this.add.bind(this, dispatch)}>
                <input type = "text" className="form-control rounded-0" placeholder ="Write your task here" onChange = {this.update} value = {this.state.title}/>
     
                <button className="form-control rounded-0 btn-secondary" type = "submit" >add task</button>
            </form>
            }}</Consumer>
            
         )
    }
    
}
