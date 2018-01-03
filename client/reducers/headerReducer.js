import { ADD_ACTIVE, REFRESH } from '../actions/headerAction'
import logo_img from '../assets/logo.png'
import banner_img from '../assets/bg.jpg'
function header(state = {
    img: {
        logo: logo_img
    },
    nav_links: [{
        path: '/',
        text: 'HOME',
        active: true
    }, {
        path: '/videos',
        text: 'VIDEOS',
        active: false
    }, {
        path: '/music',
        text: 'MUSIC',
        active: false
    }, {
        path: '/community',
        text: 'COMMUNITY',
        active: false
    }],
    user_links: [{
        path: '/login',
        text: 'LOGIN',
        active: false
    }, {
        path: '/register',
        text: 'REGISTER',
        active: false
    }]
}, action) {
    let nav_links = state.nav_links.concat();
    switch (action.type) {
        
        case ADD_ACTIVE:
            //nav_links = state.nav_links
            //一定要进行深复制
            for (let i = 0; i < nav_links.length; i++) {
                nav_links[i].active = false;
            }
            nav_links[action.index].active = true;
            return Object.assign({}, state, {
                nav_links: nav_links,
            })
        case REFRESH:
            
            for (let i = 0; i < nav_links.length; i++) {
                console.log()
                if(action.href.indexOf((nav_links[i].text.toLowerCase())) > 0) {
                    nav_links[i].active = true;
                } else {
                    nav_links[i].active = false;
                }
                
            }
            return Object.assign({}, state, {
                nav_links: nav_links,
            })
        default:
            return state
    }

}
export default header