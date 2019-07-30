import {observable} from "mobx";

class Button {

    @observable active;

    style = {}

    constructor(){
        this.active = false
    }

    get State(){ return this.active }

    get Style(){ return this.style }

    toggleState(){ this.active = !this.active }

    onClick(){}


}

export default Button