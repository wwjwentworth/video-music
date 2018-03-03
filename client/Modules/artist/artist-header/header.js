import React, { Component } from 'react'
import {Icon} from 'antd'
import './header.less'
class Header extends Component {
    render() {
        const {
            img1v1Url,
            name,
            musicSize,
            albumSize,
            mvSize,
            briefDesc, } = this.props.artist
        return (
            <div className="artist-header">
                <div className="avatar">
                    <img src={img1v1Url} alt="artist-avatar" />
                </div>

                <div className="num">
                    <span className="name">{name}</span>
                    <span>
                        <Icon type="customer-service" />歌曲数:{musicSize}
                    </span>
                    <span>
                        <Icon type="wallet" />专辑数:{albumSize}
                    </span>
                    <span>
                        <Icon type="play-circle-o" />MV数:{mvSize}
                    </span>
                </div>

                <div className="desc">
                    <p>{briefDesc}</p>
                </div>
            </div>
        )
    }
}
export default Header