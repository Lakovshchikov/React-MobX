import {observable} from "mobx";

class MenuItem {

    @observable text

    style = {};

    constructor(){
        this.text = '';
    }

    get Style(){ return this.style }

    get Text() { return this.text }

    onClick(){}
}

export default MenuItem;