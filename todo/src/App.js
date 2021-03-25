import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import {Provider} from "./context"


function App() {
  return (
    <Provider>

    
    <div>
      
      <Header/>
      <AddTask/>
      <p>press <i><b>x </b></i> to remove task</p>
      <Tasks />
    </div>
    </Provider>
  );
}

export default App;
