import React, { Component} from "react";
import {hot} from 'react-hot-loader';
import Header from "./components/header/Header"
import './styles/index.less';

class App extends Component{
    render(){
        return(
            <div className="app">
                <Header/>
            </div>
        );
    }
}

export default hot(module)(App);