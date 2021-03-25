import React, { Component } from 'react'
import CurTask from "./CurTask";
import {Consumer} from '../context'
export default class Tasks extends Component {
    render() {
        return (
            <Consumer>{value =>{    
                const {tasks} = value
                return tasks.map(task => <CurTask todo = {task} key = {task.id}></CurTask>)
            } }</Consumer> 
            
        )
    }
}
