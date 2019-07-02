import React, { Component} from "react";
import Logo from "./logo/Logo.jsx"

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="header">
                <Logo/>
            </div>)
    }
}

export default Header