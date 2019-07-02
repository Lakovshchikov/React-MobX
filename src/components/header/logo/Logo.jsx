import React, { Component} from "react";

class Logo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <a
                className="logo"
                href={window.location.href}
            ></a>)
    }
}

export default Logo