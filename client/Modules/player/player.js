import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatDuration, formatCurrentTime } from '../../common/util'
import { Button, Icon } from 'antd'

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
        modeIcon: 'icon-loop2',
        showReadyList: false,
        showPlayBtn: false
    }
    componentDidMount() {
        console.log(this.props.player)
    }
    preSong = () => {
        console.log('preSong')
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
        console.log('nextSong')
    }
    setMode = () => {
        console.log('setMode')
    }
    toggleReadyList = () => {
        console.log('toggleReadyList')
    }
    toPlay = () => {
        // 资源无效异常处理存在问题
        this.audio.play()
        this.setState({ ppIcon: 'icon-pause2' })
    };
    toPause = () => {
        this.audio.pause()
        this.setState({ ppIcon: 'icon-play3' })
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
        const { song } = this.props.player
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
                    <i className="icon-heart" />
                    <i className={modeIcon} onClick={this.setMode} />
                    <i className="icon-list" onClick={this.toggleReadyList} />
                </div>
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