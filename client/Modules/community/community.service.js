import {message} from 'antd'
export function showMessage(type, content) {
    message[type](content)
}