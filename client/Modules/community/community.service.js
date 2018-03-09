import {message} from 'antd'
import axios from 'axios'
const API_PREFIX = 'http://localhost:4000'
export function getCommunityData() {
    return axios.get(`${API_PREFIX}/tree`)
}
export function saveCommunity(data) {
    return axios.post(`${API_PREFIX}/community`, data)
}
export function showMessage(type, content) {
    message[type](content)
}