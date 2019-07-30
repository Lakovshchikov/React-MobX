import MenuItemStore from "../general/MenuItem"

class Compare extends MenuItemStore{
    constructor(){
        super()
        this.text = 'Сравнение';
        this.style = 'compare';
    }

    onClick() {
        alert("click");
    }
}

export default new Compare();