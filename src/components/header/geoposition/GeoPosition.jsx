import {observer} from "mobx-react";
import React, { Component} from 'react';
import GeoPositionStore from '../../../stores/header/GeoPosition'

@observer
class GeoPosition extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div
                className='menu-item_wrapper'
                onClick={()=>{
                    GeoPositionStore.getPosition();
                }}
            >
                <div className='geoposition'>
                    <span className='icon'></span>
                    <span className='position'>{GeoPositionStore.position}</span>
                </div>
            </div>
        )
    }
}

export default GeoPosition