import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatDuration, formatCurrentTime } from '../../common/util'
import { Button, Icon, Tooltip } from 'antd'

import * as playerActions from './player.action'

import ReadyList from './ready-list/ready-list'

import './player.less'
class Player extends Component {
    state = {
        cdt: '00:00',
        curProgressBarWidth: 0,
        curVolBarWidth: '50%',
        ppIcon: 'icon-play3',
        lastVolumeIcon: '',
        volumeIcon: 'icon-volume-medium',
        mode: 'listloop',
        modeIcon: 'swap',
        modeText: '列表循环',
        showReadyList: false,
        showPlayBtn: false,
        isFavorite: false
    }
    componentDidMount() {
        console.log(this.props.player)
    }
    componentDidUpdate(prevProps) {
        //把这里当成redux的回调吧
        if (this.props.player.song.id !== prevProps.player.song.id) {
            this.changeSongCallback()
        }
    }
    changeSongCallback = () => {
        const { showPlayBtn } = this.state
        if (!showPlayBtn || this.props.player.flag === 'PLAY_SONG') {
            this.toPlay()
        }
    }
    preSong = () => {
        const { mode } = this.state
        const { dispatch } = this.props
        let { index, playlist } = this.props.player
        index -= 1;
        if (index === -1) {
            index = playlist.length - 1
        }
        if (mode === 'shuffleplay') {
            index = Math.floor(Math.random() * playlist.length)
        }
        const song = playlist[index]
        this.setState({
            showPlayBtn:false
        }, () => {
            dispatch(playerActions.changeSong(song, index))
        })
    }
    togglePlay = () => {
        if (this.audio.paused || this.audio.ended) {
            this.toPlay()
            this.setState({
                showPlayBtn: !this.state.showPlayBtn
            })
        } else {
            this.toPause()
            this.setState({
                showPlayBtn: !this.state.showPlayBtn
            })
        }
    }
    nextSong = () => {
        const { mode } = this.state
        const {dispatch} = this.props
        let { index, playlist } = this.props.player
        index += 1
        if (index === playlist.length) {
            index = 0
        }
        if (mode === 'shuffleplay') {
            index = Math.floor(Math.random() * playlist.length)
        }
        const song = playlist[index]
        this.setState({
            showPlayBtn:false
        }, () => {
            dispatch(playerActions.changeSong(song, index))
        })
    }
    setMode = () => {
        const { mode } = this.state
        switch (mode) {
            // 列表循环 => 顺序播放
            case 'listloop':
                this.setState({
                    mode: 'sequential',
                    modeIcon: 'menu-unfold',
                    modeText: '顺序播放'
                })
                break
            // 顺序播放 => 单曲循环
            case 'sequential':
                this.setState({
                    mode: 'singleCycle',
                    modeIcon: 'link',
                    modeText: '单曲循环'
                }, () => {
                    this.audio.loop = true
                })
                break
            // 单曲循环 => 随机播放
            case 'singleCycle':
                this.setState({
                    mode: 'shuffleplay',
                    modeIcon: 'paper-clip',
                    modeText: '随机播放'
                }, () => {
                    this.audio.loop = false
                })
                break
            // 随机播放 => 列表循环
            case 'shuffleplay':
                this.setState({
                    mode: 'listloop',
                    modeIcon: 'swap',
                    modeText: '列表循环'
                })
                break
            default:
                break
        }
    }
    toggleHeart = () => {
        this.setState({
            isFavorite: !this.state.isFavorite
        })
    }
    toggleReadyList = () => {
        this.setState({
            showReadyList: !this.state.showReadyList
        })
    }
    toPlay = () => {
        // 资源无效异常处理存在问题
        this.audio.play()
        this.setState({ showPlayBtn: true })
    };
    toPause = () => {
        this.audio.pause()
        this.setState({ showPlayBtn: false })
    };
    setVol = (e) => {
        const distance = e.clientX - this.volBar.offsetLeft
        const scale = distance / this.volBar.offsetWidth
        this.audio.volume = scale
        let volumeIcon
        if (scale > 0 && scale < 0.4) {
            volumeIcon = 'icon-volume-low'
        } else if (scale >= 0.4 && scale < 0.6) {
            volumeIcon = 'icon-volume-medium'
        } else if (scale >= 0.6 && scale <= 1) {
            volumeIcon = 'icon-volume-high'
        }
        this.setState({
            volumeIcon,
            curVolBarWidth: `${distance}px`,
        })
    };
    syncTime = () => {
        const progressBarWidth = this.progressBar.offsetWidth
        const { song } = this.props.player
        const timeScale = (this.audio.currentTime * 1000) / song.dt
        this.setState({
            curProgressBarWidth: `${progressBarWidth * timeScale}px`,
            cdt: formatCurrentTime(this.audio.currentTime),
        })
    }
    render() {
        const {
            ppIcon,
            volumeIcon,
            modeIcon,
            curProgressBarWidth,
            curVolBarWidth,
            showReadyList,
          } = this.state
        const { song, playlist } = this.props.player
        return (
            <div className="player">
                {this.renderAlbumImg(song)}
                <div className="player-btns">
                    <Button className="pre-btn" onClick={this.preSong}>
                        <Icon type="step-backward" className="step" />
                    </Button>
                    {
                        !this.state.showPlayBtn ?
                            <Button className="pp-btn" onClick={this.togglePlay}><Icon type="caret-right" /></Button> : null
                    }
                    {
                        this.state.showPlayBtn ?
                            <Button className="pp-btn" onClick={this.togglePlay}><Icon type="pause" /></Button> : null
                    }
                    <Button className="next-icon" onClick={this.nextSong}>
                        <Icon type="step-forward" className="step" />
                    </Button>
                </div>
                <div className="player-state">
                    <div className="song-info">
                        <audio
                            src={song.url}
                            ref={(node) => {
                                this.audio = node
                            }}
                            onTimeUpdate={this.syncTime}
                            onEnded={this.ended}
                        >
                            您的浏览器不支持audio标签，无法播放音乐
                        </audio>
                        <span className="song-name">
                            {song.name}
                        </span>
                        <div className="song-artist">
                            {
                                song.ar.map(v => <Link key={v.id} to={`/artistinfo/${v.id}`}> {v.name} </Link>)
                            }
                        </div>
                        <div className="song-duration">
                            {this.state.cdt}/{formatDuration(song.dt)}
                        </div>
                    </div>

                    <div className="progress-wrapper">
                        <div
                            className="progress-bar"
                            ref={(node) => {
                                this.progressBar = node
                            }}
                            onClick={this.setCurTime}
                        >
                            <div className="current-progress" style={{ width: `${curProgressBarWidth}` }} />
                        </div>
                    </div>
                </div>

                <div className="vol-wrapper">
                    <div className="vol">
                        <Icon type="sound" className="sound" onClick={this.toggleMute} />
                        <div
                            className="vol-bar"
                            ref={(node) => {
                                this.volBar = node
                            }}
                            onClick={this.setVol}
                        >
                            <div className="current-vol"
                                style={{ width: `${curVolBarWidth}` }} />
                        </div>
                    </div>
                </div>

                <div className="player-mode">
                    <Icon type="heart" onClick={this.toggleHeart}
                        style={{
                            color: this.state.isFavorite ? 'red' : ''
                        }} />
                    <Tooltip title={this.state.modeText}>
                        <Icon type={this.state.modeIcon} onClick={this.setMode} />
                    </Tooltip>
                    <Icon type="appstore" onClick={this.toggleReadyList} />
                </div>
                {showReadyList ? <ReadyList playlist={playlist} song={song} /> : null}
            </div>
        )
    }
    renderAlbumImg = (song) => {
        return (
            <div className="album-img">
                <img src={song.al.picUrl} alt="album-img" />
            </div>
        )
    }
}

function mapStateToProps({ player }) {
    return {
        player
    }
}
export default connect(mapStateToProps)(Player)