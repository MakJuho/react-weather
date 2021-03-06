import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

import './App.css';


class App extends Component{
    componentDidMount(){
        console.log('Component DID Mount');
    }

    render(){

      const name = "Lain";

      return(
        <BrowserRouter>
          <div className="App">
            
            <Route exact path="/" component={Home}/>
            
            <Route path="/about" component={About}/>

            <Header name={name} foo="DevJuho"/>

          </div>
        </BrowserRouter>
      )
    }
    
}


export default App;
