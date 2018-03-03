import { message, notification } from 'antd'
import axios from 'axios'
export function getArtistList(artistId) {
    return axios(`https://api.imjad.cn/cloudmusic/?type=artist&id=${artistId}`)
}
export function showMessage(type, content) {
    return message[type](content)
}