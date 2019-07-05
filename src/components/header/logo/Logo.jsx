import React, { Component} from "react";

class Logo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="logo_wrapper">
                <a
                    className="logo"
                    href={window.location.href}
                ></a>
            </div>
)
    }
}

export default Logo