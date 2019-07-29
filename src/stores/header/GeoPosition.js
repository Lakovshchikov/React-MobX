import {observable, autorun} from "mobx";
import axios from "axios";
import Request_API from "../../lib/Request_API"

class GeoPosition {

    @observable position

    constructor(){
        this.position = 'Не установлена';
    }

    getPosition(){
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