import title_img from '../assets/goodtime.png'
import { REQUEST_REGISTER, RECEIVE_REGISTER } from '../actions/registerAction';
function register(state = {
    title_img:title_img,
    isFetching:false,
    data:''
}, action) {
    switch(action.type) {
        case REQUEST_REGISTER:{
            return Object.assign({},state,{
                isFetching:true
            })
        }
        case RECEIVE_REGISTER:{
            return Object.assign({}, state, {
                isFetching:false,
                data:'done'
            })
        }
        default:
            return state
    }
}
export default register