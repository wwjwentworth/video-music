import * as headerActions from './header.action'
import logo_img from '../../assets/logo.png'
import banner_img from '../../assets/bg.jpg'
import {nav_links} from './header.data'
export function header(state = {
    img: {
        logo: logo_img
    },
    nav_links: nav_links,
}, action) {
    let nav_links = state.nav_links.concat();
    switch (action.type) {
        case headerActions.ADD_ACTIVE:
            //nav_links = state.nav_links
            //一定要进行深复制
            for (let i = 0; i < nav_links.length; i++) {
                nav_links[i].active = false;
            }
            nav_links[action.payload].active = true;
            return Object.assign({}, state, {
                nav_links: nav_links,
            })
        case headerActions.REFRESH:
            for (let i = 0; i < nav_links.length; i++) {
                nav_links[i].active = false;
            }
            for(let i = 0; i < nav_links.length; i++) {
                if(window.location.href.indexOf(nav_links[i].path) > 0) {
                    nav_links[i].active = true;
                }
            }
            return Object.assign({}, state, {
                nav_links:nav_links
            })
        case headerActions.ERRORS:
            return {
                ...state,
                errors:action.payload
            }
        default:
            return state
    }
}