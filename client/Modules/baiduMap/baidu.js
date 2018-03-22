import React, { Component } from 'react'
import { Input } from 'antd'

import './baidu.less'
const INIT_OPTS = {
    width: 200,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
}

class BaiduMap extends Component {
    state = {
    }
    renderInfoWindow = (point) => {
        return new BMap.InfoWindow(`<div>${point.info}</div>`, INIT_OPTS)
    }
    addEquipment = (e, map) => {
        var marker = new BMap.Marker(e)
        map.addOverlay(marker)
        var infoWindow = this.renderInfoWindow({"info":"eee"})
        marker.addEventListener('click', () => {
            map.openInfoWindow(infoWindow, e)
        })
    }
    showMenu = (menu, map) => {
        const menuItem = [
            {
                text: '添加设备',
                callback: (e) => this.addEquipment(e, map)
            }
        ]
        for (let i = 0; i < menuItem.length; i++) {
            menu.addItem(new BMap.MenuItem(menuItem[i].text, menuItem[i].callback, 100))
        }
        map.addContextMenu(menu)
    }
    componentDidMount() {
        var map = new BMap.Map('wwj-baidu-map')
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 15); // 初始化地图,设置中心点
        this.showMenu(new BMap.ContextMenu(), map)//点击右键添加右键菜单

    }
    render() {

        return (
            <div id="wwj-baidu-map"
                style={{
                    width: "100%",
                    height: "100%"
                }}>
            </div>
        )
    }
}
export default BaiduMap