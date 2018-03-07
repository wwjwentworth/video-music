import {message} from 'antd'
export function showMessage(type, content) {
    return message[type](content)
}