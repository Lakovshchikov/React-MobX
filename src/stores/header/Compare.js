import MenuItemStore from "../general/MenuItem"

class Compare extends MenuItemStore{
    constructor(){
        super()
        this.text = 'Сравнение';
        this.style = {
            common: 'compare_menu-item'
        };
    }

    onClick() {
        alert("click");
    }
}

export default new Compare();