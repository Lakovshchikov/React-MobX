import React, { Component} from 'react';
import {observer} from "mobx-react";
import classNames from 'classnames';
import SearchBarStore from '../../../stores/header/Search_bar.js'
import SearchButtonStore from '../../../stores/general/button/SearchButtonStore'
import Button from '../../general/Button'

@observer
class Search_bar extends Component{
    constructor(props){
        super(props)

        this.render_searchHistory = this.render_searchHistory.bind(this);
        this.inputClear = this.inputClear.bind(this);
        this.onInputTextChange = this.onInputTextChange.bind(this);
        this.toggleState = this.toggleState.bind(this);

        this.state = {
            input_value: ''
        };
    }

    render_searchHistory (history_items){
        return(
            <div className={classNames('search_history_wrapper, {active: false}')}>
                {history_items.forEach((item)=>{
                    return(
                        <div className='search_item'>
                            {item}
                        </div>
                    )
                })}
            </div>
        )
    }

    toggleState(){
        if(!this.state.input_value) {
            SearchBarStore.toggleState();
            SearchButtonStore.toggleState();
        }
    }

    onInputTextChange(e){
        this.setState({
            input_value:e.target.value
        })
    }

    inputClear(){
        this.setState({
            input_value:''
        },()=>{
            this.toggleState();
        })
    }

    // TO DO
    // history_items из store

    render(){
        let active = SearchBarStore.getState() || this.state.input_value.length;
        return(
            <div className="search_wrapper">
                <div className={classNames('search_bar',{active:active})}>
                    <input type="text"
                        onFocus={this.toggleState}
                        onBlur={this.toggleState}
                        onChange={this.onInputTextChange}
                        value={this.state.input_value}
                    />
                    <div className="input_clear-wrapper">
                        {(this.state.input_value.length) ?
                            <span
                                onClick={this.inputClear}
                                className={"input_clear"}
                            >
                            </span>
                        :
                        null}
                    </div>
                </div>
                <Button
                    text = {'Поиск'}
                    store = {SearchButtonStore}
                />
                {(false) ?
                this.render_searchHistory()
                    :
                null}
            </div>
        )
    }
}

export default Search_bar;