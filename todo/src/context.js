import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

const reducer = (prevState, action) => {
    switch(action.type){
        case "Toggle":
            return {tasks: prevState.tasks.map(task => {if(task._id === action.payload){task.complete = !task.complete}; return task})}
        case "Remove":
            return {tasks: prevState.tasks.filter(todo => todo._id !== action.payload)}
        case "Add":
            return {tasks: [...prevState.tasks, action.payload]}
        default:
            return prevState
    }
}

export class Provider extends Component {
    state = {
        tasks:[],
        dispatch: (action) => this.setState(prevState => reducer(prevState, action))
           
    }
    componentDidMount(){
        axios.get('/tasks')
        .then(res => this.setState({tasks:res.data}))
    }
    render() {
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>    
        )
    }
}

export const Consumer = Context.Consumer