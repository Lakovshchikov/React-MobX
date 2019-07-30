import {observer} from "mobx-react";
import React, { Component} from 'react';
import classNames from 'classnames';

/* Props
 store {Object) - store для соответсвующего MenuItem
*/

@observer
class MenuItem extends Component{
    constructor(props){
        super(props)
        this.Store = this.props.store;
    }

    render(){
        return(
            <div
                className={classNames('menu-item_wrapper')}

                onClick={()=>{
                    this.Store.onClick();
                }}
            >
                <div className={classNames('menu-item', this.Store.Style)}>
                    <span className='icon'></span>
                    <span className='text'>{this.Store.Text}</span>
                </div>
            </div>
        )
    }
}

export default MenuItem