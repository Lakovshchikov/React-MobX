import MenuItemStore from "../general/MenuItem"

class Chats extends MenuItemStore{
    constructor(){
        super()
        this.text = 'Чаты';
        this.style = {
            common: 'chats_menu-item'
        };
    }

    onClick() {
        alert("click");
    }
}

export default new Chats();