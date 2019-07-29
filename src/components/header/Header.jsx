import React, { Component} from "react";
import Logo from "./logo/Logo.jsx"
import Search_bar from "./search_bar/Search_bar"
import GeoPosition from './geoposition/GeoPosition'

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="header">
                <Logo/>
                <Search_bar/>
                <GeoPosition/>
            </div>)
    }
}

export default Header