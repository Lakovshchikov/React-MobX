import {observable} from "mobx";

class Search_bar {

    @observable active;

    constructor(){
        this.active = false
    }

    getState(){ return this.active }

    toggleState(){ this.active = !this.active }
}

export default new Search_bar()