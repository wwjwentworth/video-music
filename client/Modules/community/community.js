import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Input, Button, Popconfirm, message } from 'antd'
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
            showCommentArea: !this.state.showCommentArea
        })
    }
    publishComment = (community) => {
        const { dispatch } = this.props
        this.setState({
            commentText: ''
        })
        community.comment.push({
            user: community.user,
            time: format(new Date(), FORMAT_TIME),
            text: this.state.commentText,

        })
        dispatch(communityActions.comment(community))
    }
    deleteComment = (community, index) => {
        const { dispatch } = this.props;
        community.comment.splice(index, 1)
        dispatch(communityActions.comment(community))
        message.success("评论已删除！")
    }
    render() {
        const { community } = this.props
        const { communityList, isloading } = community
        return (
            <div className="wwj-community">
                {
                    !isloading ?
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
                                                        <Icon type="play-circle-o" className="play-img" onClick={() => this.playSong(community.song)} />
                                                        <img src={community.song.al.picUrl} />
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
                                                <div className="form"><Icon type="form" onClick={this.toggleCommentArea} />评论({community.comment.length})</div>
                                                <div className="fork"><Icon type="fork" />分享</div>
                                            </div>
                                            {
                                                this.state.showCommentArea ?
                                                    <div className="comment-area">
                                                        <TextArea placeholder="发表评论" autosize={{ minRows: 2, maxRows: 6 }} value={this.state.commentText} onChange={(e) => this.setState({ commentText: e.target.value })} />
                                                        <div className="publish-btn">
                                                            <Button type="primary" onClick={() => this.publishComment(community)} >发表</Button>
                                                        </div>
                                                        {
                                                            community.comment ?
                                                                community.comment.map((text, index) => {
                                                                    return (
                                                                        <div key={index} className="comments">
                                                                            <div className="text">
                                                                                <Icon type="github" />
                                                                                <p className="user">{text.user}：</p>
                                                                                <p>{text.text}</p>
                                                                            </div>
                                                                            <div className="time">
                                                                                <p>{text.time}</p>
                                                                                <Popconfirm title="确定删除此条评论？" onConfirm={() => this.deleteComment(community, index)} okText="确定" cancelText="取消">
                                                                                    <Icon type="delete" />
                                                                                </Popconfirm>
                                                                                
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
                        </div> : null
                }
                {
                    isloading ?
                        <div className="loading">
                            <div></div>
                            <p>loading</p>
                        </div> : null
                }
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