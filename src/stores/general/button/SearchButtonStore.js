import Button from './Button'


class SearchButtonStore extends Button{

    style = {
        button_style:"search_button"
    }

    constructor(){
        super()
    }
}

export default new SearchButtonStore()