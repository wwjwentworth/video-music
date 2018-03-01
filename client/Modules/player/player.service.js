import { message, notification } from 'antd'
import axios from 'axios'

export function playSong(songId) {
    return axios.get(`https://api.imjad.cn/cloudmusic/?type=song&id=${songId}`)
}

export function showMessage(type, content) {
    return message[type](content)
}
