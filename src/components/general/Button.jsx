import React, { Component} from 'react';
import {observer} from "mobx-react";
import classNames from 'classnames';
import Dictionary from '../../lib/dictionary'

/*
 @props
    .text       {string}    текст кнопки
    .store      {Object}    Store для компонента
*/


@observer
class Button extends Component{
    constructor(props){
        super(props);
        this.button_style = null;
        this.Store = this.props.store;

        this.setStyles = this.setStyles.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    setStyles(){
        this.button_style = this.Store.Style.button_style;
    }

    onClick(){
        this.Store.onClick();
    }

    render(){
        let active = this.Store.State;
        this.setStyles()
        return(
            <div
                className={classNames("button",this.button_style,{active:active})}
                onClick={this.onClick}
                    >
                <span>
                    {this.props.text}
                </span>
            </div>
        )
    }
}

export default Button