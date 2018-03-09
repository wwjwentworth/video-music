import { message, notification } from 'antd'
import axios from 'axios'
const API_PREFIX = 'http://localhost:4000'
export function getMusicList(limit, pagenum) {
    return axios.get(`http://112.74.56.114:8888/NetEaseMusicServer/index?limit=${limit}&pagenum=${pagenum}`)
}
export function getMusicDetails(musicID) {
    return axios.get(`https://api.imjad.cn/cloudmusic/?type=playlist&id=${musicID}`)
}

export function postMusicData(info) {
    return axios.post(`${API_PREFIX}/community`, info)
}
export function showMessage(type, content) {
    return message[type](content)
}