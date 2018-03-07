import { message, notification } from 'antd'
import axios from 'axios'
const API_PREFIX = 'http://localhost:4000'
export function getBannerList() {
   return axios.get(`${API_PREFIX}/videos_banner`)
}

export function getPushOnList() {
    return axios.get(`${API_PREFIX}/videos_push_on`)
}

export function getCutList() {
    return axios.get(`${API_PREFIX}/videos_cut`)
}

export function getVideoDetails(id) {
    return axios.get(`${API_PREFIX}/videos_details/${id}`)
}

export function showMessage(type, content) {
    return message[type](content)
}
