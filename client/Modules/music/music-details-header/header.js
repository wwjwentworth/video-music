import React, { Component } from 'react'
import { format } from 'date-fns'
import {Icon} from 'antd'
import './header.less'
const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
class Header extends Component {
    state = {
        showDesc:false
    }
    render() {
        const { playlist } = this.props
        console.log(playlist)
        return (
            <div className="music-details-header">
                {this.renderCoverImg(playlist)}
                <div className="header-right">
                    {this.renderName(playlist)}
                    {this.renderCreator(playlist)}
                    {this.renderOptionButtons(playlist)}
                    {this.renderTags(playlist)}
                    {this.renderDetailsDesc(playlist)}
                </div>
            </div>
        )
    }
    renderCoverImg = (playlist) => {
        if (playlist) {
            return (
                <div className="cover-img">
                    <img src={playlist.coverImgUrl} alt="pic" />
                    <p className="play-count">
                        <Icon type="sound" />
                        {playlist.playCount}
                    </p>
                </div>
            )
        }
    }
    renderName = (playlist) => {
        if(playlist) {
            return(
                <p className="title">{playlist.name}</p>
            )
        }
    }
    renderCreator = (playlist) => {
        if (playlist) {
            let {createTime} = playlist
            createTime = format(createTime, TIME_FORMAT)
            return (
                <div className="creator">
                    <div className="creator-avatar">
                        <img src={playlist.creator.avatarUrl} alt="creator-avatar" />
                    </div>
                    <div className="creator-nickname">{playlist.creator.nickname}</div>
                    <div className="create-time">
                        {createTime}创建
                    </div>
                </div>
            )
        }
    }
    renderOptionButtons = (playlist) => {
        if(playlist) {
            return(
                <div className="operation-buttons">
                    <a onClick={this.beforeStar}>
                        <Icon type="heart" />收藏({
                        playlist.subscribedCount
                        })
                    </a>
                    <a>
                        <Icon type="aliwangwang" />评论({playlist.commentCount})
                    </a>
                    <a>
                        <Icon type="fork" className="fork"/>分享({playlist.shareCount})
                    </a>
                    <a>
                        <Icon type="cloud-download" />下载全部
                    </a>
                    <a><Icon type="ellipsis" className="more"/>更多</a>
                </div>
            )
        }
    }
    renderTags = (playlist) => {
        if(playlist) {
            return (
                <div className="tags">
                    标签：
                    {
                        playlist.tags.map(tag => <span key={tag}>{tag}</span>)
                    }
                </div>
            )
        }
    }
    renderDetailsDesc = (playlist) => {
        if(playlist) {
            return(
                <div className="details-desc" onClick={this.toggleDesc}>
                    <p className={this.state.showDesc ? 'show' : 'more'}>
                        {playlist.description}
                    </p>
                </div>
            )
        }
    }
    toggleDesc = () => {
        this.setState({
          showDesc: !this.state.showDesc,
        })
    };
    beforeStar = () => {
        const { playlist } = this.props
        const { id, name, coverImgUrl } = playlist
        const parseList = {
          id,
          name,
          coverImgUrl,
        }
      };
}
export default Header