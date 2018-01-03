import {NOW_LOCAL} from '../actions/carouselAction'
function carousel(state = {
    nowLocal:0,
    speed:1,
    delay:2,
    pause:false,
    autoplay:true,
    dots:true,
    arrows:true,
    items:[{
        text_ch:'YouToBe 日推',
        text_en:'Push On',
        href:'#',
    },{
        text_ch:'YouToBe 日推',
        text_en:'Push On',
        href:'#',
    },{
        text_ch:'YouToBe 日推',
        text_en:'Push On',
        href:'#',
    }]
}, action) {
    switch(action.type) {
        case NOW_LOCAL:
            return Object.assign({}, state, {
                nowLocal:action.now
            })
        default:
            return state
    }
    
}
export default carousel