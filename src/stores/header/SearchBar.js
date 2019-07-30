import {observable} from "mobx";

class SearchBar {

    @observable active;

    constructor(){
        this.active = false
    }

    getState(){ return this.active }

    toggleState(){ this.active = !this.active }
}

export default new SearchBar()