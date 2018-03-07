import { message, notification } from 'antd'
import axios from 'axios'

const API_PREFIX = 'http://localhost:4000'

export function loginRequest(info) {
    return axios.post(`${API_PREFIX}/login`, info)
}
export function showMessage(type, content) {
    return message[type](content)
}