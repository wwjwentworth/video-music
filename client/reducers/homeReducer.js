import {PLAY, VIDEO_ADD_ACTIVE} from '../actions/audioAction'
import banner_arrow from '../assets/arrow.png'
import option_vimg from '../assets/goodtime.png'
function home(state = {
    banner_arrow:banner_arrow,
    option_vimg:option_vimg,
    items:[{
        headline:'YouToBe日推',
        text_ch:'YouToBe 日推',
        text_en:'Push On',
        href:'#',
        img:require('../assets/406H.jpg'),
        active:true,
        description:'公司的机构你手机我哦结构is大家根据地哦感觉哦is共is价格iOS的奇偶格式结构你手机偶奇偶is结构is进公司囧结构is结构is奇偶is结构is结构is价格囧结构is价格'
    },{
        headline:'精选预告',
        text_ch:'YouToBe 日推',
        text_en:'Push On',
        href:'#',
        img:require('../assets/406H.jpg'),
        active:false,
        description:'阿佛爱疯激发就发排气阀 加强筋方清平放假按揭房攀爬放假开票费怕积分攀爬就按揭房盼复啊放假怕就怕积分怕积分啪啪 反扒积分怕反扒附近啪就发脾气怕飞机积分怕反扒猫爬架分配附近啪分配阀激发皮肤就怕积分判罚'
    },{
        headline:'混剪',
        text_ch:'YouToBe 日推',
        text_en:'Push On',
        href:'#',
        img:require('../assets/406H.jpg'),
        active:false,
        description:'公司的机构你手机我哦结构is大家根据地哦感觉哦is共is价格iOS的奇偶格式结构你手机偶奇偶is结构is进公司囧结构is结构is奇偶is结构is结构is价格囧结构is价格'
    },{
        headline:'YouToBe日推',
        text_ch:'YouToBe 日推',
        text_en:'Push On',
        href:'#',
        img:require('../assets/406H.jpg'),
        active:true,
        description:'公司的机构你手机我哦结构is大家根据地哦感觉哦is共is价格iOS的奇偶格式结构你手机偶奇偶is结构is进公司囧结构is结构is奇偶is结构is结构is价格囧结构is价格'
    },{
        headline:'精选预告',
        text_ch:'YouToBe 日推',
        text_en:'Push On',
        href:'#',
        img:require('../assets/406H.jpg'),
        active:false,
        description:'阿佛爱疯激发就发排气阀 加强筋方清平放假按揭房攀爬放假开票费怕积分攀爬就按揭房盼复啊放假怕就怕积分怕积分啪啪 反扒积分怕反扒附近啪就发脾气怕飞机积分怕反扒猫爬架分配附近啪分配阀激发皮肤就怕积分判罚'
    },{
        headline:'混剪',
        text_ch:'YouToBe 日推',
        text_en:'Push On',
        href:'#',
        img:require('../assets/406H.jpg'),
        active:false,
        description:'公司的机构你手机我哦结构is大家根据地哦感觉哦is共is价格iOS的奇偶格式结构你手机偶奇偶is结构is进公司囧结构is结构is奇偶is结构is结构is价格囧结构is价格'
    },{
        headline:'混剪',
        text_ch:'YouToBe 日推',
        text_en:'Push On',
        href:'#',
        img:require('../assets/406H.jpg'),
        active:false,
        description:'公司的机构你手机我哦结构is大家根据地哦感觉哦is共is价格iOS的奇偶格式结构你手机偶奇偶is结构is进公司囧结构is结构is奇偶is结构is结构is价格囧结构is价格'
    }]
},action) {
    let items = state.items.concat()
    switch(action.type) {
        case VIDEO_ADD_ACTIVE:
            for(let i = 0; i < items.length; i++) {
                items[i].active = false
            }
            items[action.index].active = true;
            return Object.assign({}, state, {
                items:items
            })
        
        default:
            return state
    }
}
export default home