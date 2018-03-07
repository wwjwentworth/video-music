import { message, notification } from 'antd'
import axios from 'axios'

const API_PREFIX = 'http://localhost:3000'
export function showMessage(type, content) {
    return message[type](content)
}