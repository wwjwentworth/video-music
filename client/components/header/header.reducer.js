import * as headerActions from './header.action'
import logo_img from '../../assets/logo.png'
import banner_img from '../../assets/bg.jpg'
export function header(state = {
    img: {
        logo: logo_img
    },
    nav: [{
        path: '/video',
        text: 'VIDEO',
        active: false
    }, {
        path: '/music',
        text: 'MUSIC',
        active: false
    }, {
        path: '/community',
        text: 'COMMUNITY',
        active: false
    }, {
        path: '/login',
        text: 'LOGIN',
        active: false
    }, {
        path: '/register',
        text: 'REGISTER',
        active: false
    }]
}, action) {
    switch (action.type) {
        case headerActions.CHANGE_PAGE_DONE:
            return {
                ...state,
                nav:action.payload
            }
        case headerActions.REFRESH:
            return{
                ...state
            }
        case headerActions.SET_USER:
            let nav = state.nav.concat()
            nav.splice(3, 4) 
            return{
                ...state,
                nav:nav
            }
        case headerActions.REMOVE_COOKIE:
            return {
                ...state
            }
        default:
            return state
    }
}