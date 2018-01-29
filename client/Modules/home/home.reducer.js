import banner_arrow from '../../assets/arrow.png'
import option_vimg from '../../assets/goodtime.png'
import {category} from './home.data'
export function home(state = {
    banner_arrow:banner_arrow,
    option_vimg:option_vimg,
    category:category
},action) {
    // let items = state.items.concat()
    switch(action.type) {
    //     case VIDEO_ADD_ACTIVE:
    //         for(let i = 0; i < items.length; i++) {
    //             items[i].active = false
    //         }
    //         items[action.index].active = true;
    //         return Object.assign({}, state, {
    //             items:items
    //         })
        
        default:
            return state
    }
}