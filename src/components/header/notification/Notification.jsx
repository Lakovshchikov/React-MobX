import {observer} from "mobx-react";
import React, { Component} from 'react';
import {has} from "mobx";

/* Props
 store {Object} - store для Notification
*/

@observer
class Notification extends Component{

    constructor(props){
        super(props)
        this.Store = this.props.store;
    }

    render(){
        let {Style}     =   this.Store;
        let active      =   this.Store.active;
        let hasNotify   =   this.Store.hasNotify;
        let classnames  =   `menu-item ${Style.common} ${active ? Style.active : ""} ${hasNotify ? Style.notify : ""}`;
        return (
            <div
                className={'menu-item_wrapper'}

                onClick={()=>{
                    this.Store.onClick();
                }}
            >
                <div className={ classnames }>
                    <span className='icon'></span>
                </div>
            </div>
        )
    }
}

export default Notification