import MenuItemStore from '../general/MenuItem'

class Wishlist extends MenuItemStore{

    constructor(){
        super();
        this.text = 'Отложенные';
        this.style = 'wishlist';
    }

    onClick() {
        window.alert("Click");
    }

}

export default new Wishlist();

