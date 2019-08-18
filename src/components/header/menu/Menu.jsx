import {observer} from "mobx-react";
import React, { Component} from 'react';
import classNames from 'classnames';
import MenuItem from '../../general/MenuItem';
import Notification from "../notification/Notification";
import GeoPositionStore from '../../../stores/header/GeoPosition';
import WishlistStore from '../../../stores/header/Wishlist';
import CompareStore from '../../../stores/header/Compare';
import ChatsStore from '../../../stores/header/Chats'
import NotificationStore from '../../../stores/header/Notification'



@observer
class Menu extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={classNames('menu-wrapper')}>
                <MenuItem
                    store = { GeoPositionStore }
                />
                <MenuItem
                    store = { WishlistStore }
                />
                <MenuItem
                    store = { CompareStore }
                />
                <MenuItem
                    store = { ChatsStore }
                />
                <Notification
                    store = { NotificationStore }
                />
            </div>
        )
    }
}

export default Menu