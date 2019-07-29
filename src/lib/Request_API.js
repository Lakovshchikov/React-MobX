import setting from "../../settings"

class Request_API {

    geocode_url ='';

    constructor(){

    }

    getGeocodeURL(coor){
        this.geocode_url = `https://geocode-maps.yandex.ru/1.x/?apikey=${setting.yandex_geocode}&geocode=${coor.long},${coor.lat}&format=json`;
        return this.geocode_url;
    }
}

export default new Request_API();