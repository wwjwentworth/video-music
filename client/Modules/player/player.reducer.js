import * as playerActions from './player.action'
export function player(state = {
    playlist: [
        {
            al: {
                id: 30614,
                name: '3/8',
                pic: 74766790706391,
                picUrl:
                    'https://p1.music.126.net/N1pCSE3EtocC7NowAAuEHQ==/74766790706391.jpg',
                tns: [],
            },
            ar: [
                {
                    id: 9952,
                    name: '谢安琪',
                    tns: [],
                },
            ],
            dt: 277029,
            name: '钟无艳',
            id: 308353,
            url:
                'http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n2/85/93/2004871240.mp3',
        },
    ],
    song: {
        al: {
            id: 30614,
            name: '3/8',
            pic: 74766790706391,
            picUrl:
                'https://p1.music.126.net/N1pCSE3EtocC7NowAAuEHQ==/74766790706391.jpg',
            tns: [],
        },
        ar: [
            {
                id: 9952,
                name: '谢安琪',
                tns: [],
            },
        ],
        dt: 277029,
        name: '钟无艳',
        id: 308353,
        url:
            'http://www.170mv.com/kw/other.web.rh01.sycdn.kuwo.cn/resource/n2/85/93/2004871240.mp3',
    },
    index: 0,
    flag: '',
}, action) {
    switch (action.type) {
        case playerActions.PLAY_SONG_DONE:
            return {
                ...state,
                playlist: [action.payload, ...state.playlist],
                song: action.payload,
                index: 0,
                flag: action.type,
            }
        case playerActions.CHANGE_SONG:
            return {
                ...state,
                song:action.payload,
                index:action.index,
                flag:action.flag
            }
        default:
            return state
    }
}