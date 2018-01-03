import check_mark_hover from '../assets/arrow1@2x.png'
import check_mark from '../assets/arrow2@2x.png'
import {ADD_ACTIVE} from '../actions/videoAction'
function video(state = {
    check_mark_hover:check_mark_hover,
    check_mark:check_mark,
    items:[{
        title:'YouToBe日推',
        active:true,
        info:'公司的机构你手机我哦结构is大家根据地哦感觉哦is共is价格iOS的奇偶格式结构你手机偶奇偶is结构is进公司囧结构is结构is奇偶is结构is结构is价格囧结构is价格'
    },{
        title:'精选预告',
        active:false,
        info:'阿佛爱疯激发就发排气阀 加强筋方清平放假按揭房攀爬放假开票费怕积分攀爬就按揭房盼复啊放假怕就怕积分怕积分啪啪 反扒积分怕反扒附近啪就发脾气怕飞机积分怕反扒猫爬架分配附近啪分配阀激发皮肤就怕积分判罚'
    },{
        title:'混剪',
        active:false,
        info:'公司的机构你手机我哦结构is大家根据地哦感觉哦is共is价格iOS的奇偶格式结构你手机偶奇偶is结构is进公司囧结构is结构is奇偶is结构is结构is价格囧结构is价格'
    },{
        title:'创意',
        active:false,
        info:'阿佛爱疯激发就发排气阀 加强筋方清平放假按揭房攀爬放假开票费怕积分攀爬就按揭房盼复啊放假怕就怕积分怕积分啪啪 反扒积分怕反扒附近啪就发脾气怕飞机积分怕反扒猫爬架分配附近啪分配阀激发皮肤就怕积分判罚'
    },{
        title:'搞笑',
        active:false,
        info:'公司的机构你手机我哦结构is大家根据地哦感觉哦is共is价格iOS的奇偶格式结构你手机偶奇偶is结构is进公司囧结构is结构is奇偶is结构is结构is价格囧结构is价格'
    },{
        title:'爱情',
        active:false,
        info:'阿佛爱疯激发就发排气阀 加强筋方清平放假按揭房攀爬放假开票费怕积分攀爬就按揭房盼复啊放假怕就怕积分怕积分啪啪 反扒积分怕反扒附近啪就发脾气怕飞机积分怕反扒猫爬架分配附近啪分配阀激发皮肤就怕积分判罚'
    },{
        title:'科幻',
        active:false,
        info:'公司的机构你手机我哦结构is大家根据地哦感觉哦is共is价格iOS的奇偶格式结构你手机偶奇偶is结构is进公司囧结构is结构is奇偶is结构is结构is价格囧结构is价格'
    }]
}, action) {
    let items = state.items.concat()
    switch(action.type) {
        case ADD_ACTIVE:
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
export default video