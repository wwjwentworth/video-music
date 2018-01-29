import * as carouselActions from './carousel.action'
export function carousel(state = {
    nowLocal:0,
    speed:1,
    delay:2,
    pause:false,
    autoplay:true,
    dots:true,
    arrows:true,
}, action) {
    switch(action.type) {
        case carouselActions.NOW_LOCAL:
            return Object.assign({}, state, {
                nowLocal:action.now
            })
        default:
            return state
    }
    
}
export default carousel