import { message, notification } from 'antd'
import axios from 'axios'
import qs from 'qs'
export function register(info) {
    return axios.post(`http://localhost:3000/register`,JSON.stringify(info))
}
export function showMessage(type, content) {
    return message[type](content)
}