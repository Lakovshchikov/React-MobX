import {observable} from "mobx";

class MenuItem {

    @observable text

    constructor(){
        this.text = '';
        this.style = '';
    }

    get Style(){ return this.style }

    get Text() { return this.text }

    onClick(){}
}

export default MenuItem;