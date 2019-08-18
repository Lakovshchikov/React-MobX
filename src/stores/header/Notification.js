import {observable} from "mobx";

class Notification {

    @observable active;
    @observable hasNotify;

    constructor(){
        this.Style = {
            common: 'notification_menu-item',
            active: 'active',
            notify: 'notify'
        };
        this.active = false;
        this.hasNotify = false;
    }

    onClick() {
        this._toggleActive();
    }

    get active() { return this.active }

    get hasNotification() { return this.hasNotify }

    _toggleActive() { this.active = !this.active }

    _toggleNotify() { this.hasNotify = !this.hasNotify }

}

export default new Notification();