import React, { Component} from 'react';
import {observer} from "mobx-react";
import classNames from 'classnames';
import Dictionary from '../../lib/dictionary'

/*
 @props
    .text       {string}    текст кнопки
    .onClick    {function}  handler на клик
    .store      {Object}    Store для компонента
    .active     {bool}      активный стиль, если нужно прокинуть из другого элемента
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
        let type = this.Store.constructor.name;
        let { ButtonTypes } = Dictionary;
        if(type == ButtonTypes.SEARCH){
            this.button_style = "search_button";
        }
    }

    onClick(){
        this.props.onClick();
    }

    render(){
        let active = this.Store.getState();
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