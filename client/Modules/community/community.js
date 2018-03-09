import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Input, Button } from 'antd'
import * as communityActions from './community.action'
import * as playerActions from '../player/player.action'
import Player from '../player/player'
import { format } from 'date-fns'
import './community.less'

const { TextArea } = Input;
const FORMAT_TIME = 'YYYY-MM-DD HH:mm:ss'
class Community extends Component {
    state = {
        showCommentArea: false,
        commentText: ''
    }
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(communityActions.getCommunityData())
    }
    playSong = (song) => {
        const { dispatch } = this.props
        dispatch(playerActions.playSong(song))
    }
    thumbUp = (community) => {
        const { dispatch } = this.props
        dispatch(communityActions.thumbUp(community))
    }
    toggleCommentArea = () => {
        this.setState({
            showCommentArea:!this.state.showCommentArea
        })
    }
    publishComment = (community) => {
        const { dispatch } = this.props
        community.comment.push({
            user: community.user,
            time: format(new Date(), FORMAT_TIME),
            text: this.state.commentText
        })
        dispatch(communityActions.comment(community))
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
                                        <div className="like"><Icon type="like-o" onClick={() => this.thumbUp(community)} />点赞({community.like})</div>
                                        <div className="form"><Icon type="form" onClick={ this.toggleCommentArea} />评论</div>
                                        <div className="fork"><Icon type="fork" />分享</div>
                                    </div>
                                    {
                                        this.state.showCommentArea ?
                                            <div className="comment-area">
                                                <TextArea placeholder="发表评论" autosize={{ minRows: 2, maxRows: 6 }} value={this.state.commentText} onChange={(e) => this.setState({ commentText: e.target.value })} />
                                                <Button type="primary" onClick={() => this.publishComment(community)} >发表</Button>
                                                {
                                                    community.comment ?
                                                        community.comment.map((text, index) => {
                                                            return (
                                                                <div key={index} className="comments">
                                                                    <div className="text">
                                                                        <p className="user">{text.user}:</p>
                                                                        <p>{text.text}</p>
                                                                    </div>
                                                                    <div className="time">
                                                                        {text.time}
                                                                    </div>
                                                                </div>
                                                            )
                                                        }) : null
                                                }
                                            </div> : null
                                    }

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