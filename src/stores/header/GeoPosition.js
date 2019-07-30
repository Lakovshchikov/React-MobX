import {observable} from "mobx";
import axios from "axios";
import Request_API from "../../lib/Request_API"
import MenuItemStore from "../general/MenuItem"

class GeoPosition extends MenuItemStore{

    @observable position

    constructor(){
        super();
        this.position = 'Не установлена';
        this.style = 'geoposition';
    }

    get Text() { return this.position }

    onClick(){
        let that = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                axios.get(Request_API.getGeocodeURL({
                    long:position.coords.longitude,
                    lat:position.coords.latitude
                })).then(res=>{
                    let GeoObject = res.data.response.GeoObjectCollection.featureMember[0].GeoObject;
                    try {
                        let city = GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(item=>{
                            return item.kind == 'locality';
                        });
                        that.position = city.name;
                    } catch {e=>{
                        that.position = "Что - то пошло не так :("
                    }}
                })
            });
        } else {
            this.position = "Геопозиция не доступна";
        }
    }
}

export default new GeoPosition();