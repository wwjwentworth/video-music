import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { specIndex, formatDuration } from '../../../common/util'
import { Table, Icon, Modal, Button } from 'antd'
import { format } from 'date-fns'
import cookie from 'react-cookies'
import ShareModal from '../../../components/shareModal/shareModal'
import * as musicActions from '../music.action'
import * as playerActions from '../../player/player.action'
import * as communityActions from '../../community/community.action'
import './content.less'

const FORMAT_TIME = 'YYYY-MM-DD HH:mm:ss'
class Content extends Component {
    state = {
        dataSource: [],
        // visible: false,
        showLoginModal:false
    }
    componentDidMount() {
        const { tracks } = this.props
        let dataSource = []
        tracks.map((track, index) => {
            dataSource.push({
                key: index,
                sequence: specIndex(index),
                name: track.name,
                album: track.al.name,
                time: formatDuration(track.dt),
                artist: track.ar,
                track:track
            })
        })
        this.setState({
            dataSource: dataSource
        })
    }
    playSong = (song) => {
        const { dispatch } = this.props
        dispatch(playerActions.playSong(song))
    }
    shareSong = (song) => {
        const { dispatch, history } = this.props
        if (!cookie.load("user")) {
            this.setState({
                showLoginModal:true
            })
            return;
        }
        this.setState({
            visible: true
        })
        const sharedSongInfo = {
            time: format(new Date(), FORMAT_TIME),
            user: cookie.load("user"),
            song: song,
            type: 'music',
            fork: 0,
            like: 0,
            comment: [],
            text:''
        }
        dispatch(musicActions.shareSong(sharedSongInfo))
        history.push('/community')
    }
    render() {
        const { tracks, isShowAr = true } = this.props
        return (
            <div className="music-details-content">
                <p className="play-all-btn">播放全部({tracks.length})</p>
                <ul className="song-container">
                    {
                        this.state.dataSource.map((data, index) => {
                            return (
                                <li key={index} className={index % 2 === 0 ? 'list-item active':'list-item'}>
                                    <p>{data.sequence}</p>
                                    <p className="operation">
                                        <Icon type="caret-right" onClick={() => this.playSong(data.track)} />
                                        <Icon type="share-alt" onClick={() => this.shareSong(data.track)} />
                                        {data.name}
                                    </p>
                                    <p>
                                        {
                                            data.artist.map((ar, index) => {
                                                return (
                                                    <span key={index}>{ar.name}</span>
                                                )
                                            })
                                        }
                                    </p>
                                    <p>{data.album}</p>
                                    <p className="time">{data.time}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <Modal
                    title="请先登录您的账号!"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showLoginModal}
                    onCancel={() => this.setState({showLoginModal:false})}
                    footer = {null}
                    className="login-modal"
                    maskClosable={false}
                >
                    <Button>
                        <Link to="/login">登录</Link>
                    </Button>
                    <Button>
                        <Link to="/register">注册</Link>
                    </Button>
                    
                </Modal>
            </div>
        )
    }
}
function mapStateToProps({ header, music }) {
    return {
        header,
        music
    }
}
export default withRouter(connect(mapStateToProps)(Content))