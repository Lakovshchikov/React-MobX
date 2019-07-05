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
        this.onFocusInput = this.onFocusInput.bind(this);
        this.onBlurInput = this.onBlurInput.bind(this);
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

    onFocusInput() {
        SearchBarStore.toggleState();
        SearchButtonStore.toggleState();
    }

    onBlurInput() {
        SearchBarStore.toggleState();
        SearchButtonStore.toggleState()
    }

    // TO DO

    //привязать active к state
    //history_items из store
    //onFocus onBlur
    // Крестик на поиске, кнопка поиска

    render(){
        let active = SearchBarStore.getState();
        return(
            <div className="search_wrapper">
                <div className={classNames('search_bar',{active:active})}>
                    <input type="text"
                        onFocus={this.onFocusInput}
                        onBlur={this.onBlurInput}
                    />
                </div>
                <Button
                    text = {'Поиск'}
                    onClick = {()=>{}}
                    store = {SearchButtonStore}
                    active = {active}
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