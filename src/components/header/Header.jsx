import React, { Component} from "react";
import Logo from "./logo/Logo.jsx"
import Search_bar from "./search_bar/Search_bar"
import Menu from "../header/menu/Menu"

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="header">
                <Logo/>
                <Search_bar/>
                <Menu/>
            </div>)
    }
}

export default Header