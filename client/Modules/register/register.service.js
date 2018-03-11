import { message, notification } from 'antd'
import axios from 'axios'

const API_PREFIX = 'http://localhost:4000'

export function register(info) {
    return axios.post(`${API_PREFIX}/register`,info)
}
export function isRepeatName(username) {
    return axios.post(`${API_PREFIX}/isRepeatName`, username)
}
export function showMessage(type, content) {
    return message[type](content)
}