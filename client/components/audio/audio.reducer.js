import * as audioAction from './audio.action'
import play_img from '../../assets/play.png'
import pause_img from '../../assets/arrow.png'
export function audio(state = {
    play_img: play_img,
    pause_img: pause_img,
    items: [{
        src: 'https://p.scdn.co/mp3-preview/a2fb514286bfd42f6b823f29ec3d965d90b89fb4',
        play: false,
        duration:0
    }, {
        src: 'https://p.scdn.co/mp3-preview/4ab65f9b193ccc37f2059344322462ae5e9dac90',
        play: false,
        duration:0
    }, {
        src: 'https://p.scdn.co/mp3-preview/407c995f072b7e6c318f08fa24d7b1b9c431ea40',
        play: false,
        duration:0
    }, {
        src: 'https://p.scdn.co/mp3-preview/fb66b04bc432abfd3dd9598689bc4d471bb5898f',
        play: false,
        duration:0
    }]
}, action) {
    let items = state.items.concat();
    switch (action.type) {
        case audioAction.PLAY:
            for (let i = 0; i < items.length; i++) {
                items[i].play = false;
                items[i].duration = 0;
            }
            items[action.index].play = true;
            items[action.index].duration = action.duration
            return Object.assign({}, state, {
                items: items
            })
        case audioAction.PAUSE:
            for (let i = 0; i < items.length; i++) {
                items[i].play = false;
            }
            return Object.assign({}, state, {
                items: items
            })
    }
    return state

}