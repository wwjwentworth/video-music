import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Icon} from 'antd'
import * as communityActions from './community.action'
import * as playerActions from '../player/player.action'
import Player from '../player/player'
import './community.less'
class Community extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(communityActions.getCommunityData())
    }
    playSong = (song) => {
        const {dispatch} = this.props
        dispatch(playerActions.playSong(song))
    }
    thumbUp = (index) => {
        const {dispatch} = this.props
        dispatch(communityActions.thumbUp(index))
    }
    render() {
        const { community } = this.props
        const { communityList } = community
        return (
            <div className="wwj-community">
                <div className="list-wrap">
                    <p className="title">动态</p>
                    {
                        communityList.map((community, index) => {
                            return (
                                <div key={index} className="list-item">
                                    <div className="header">
                                        <p className="user">{community.user}</p>
                                        <p className="type">{`分享${community.type === 'music' ? '音乐' : '视频'}`}</p>
                                    </div>
                                    <div className="time">{community.time}</div>
                                    {
                                        community.type === 'music' ?
                                        <div className="music">
                                            <img src={community.song.al.picUrl} onClick={() => this.playSong(community.song)} />
                                            <div className="info">
                                                <p className="name">{community.song.name}
                                                </p>
                                                <p className="artist">
                                                    {
                                                        community.song.ar.map((a, index) => {
                                                            return (
                                                                <span key={index}>{a.name}</span>
                                                            )
                                                        })
                                                    }
                                                </p>
                                            </div>
                                        </div> : null
                                    }
                                    <div className="operation">
                                        <div className="like"><Icon type="like-o" onClick={() => this.thumbUp(index)}/>点赞</div>
                                        <div className="form"><Icon type="form" />评论</div>
                                        <div className="fork"><Icon type="fork" />分享</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Player></Player>
            </div>
        )
    }
}
function mapStateToProps({ community }) {
    return {
        community
    }
}
export default connect(mapStateToProps)(Community)