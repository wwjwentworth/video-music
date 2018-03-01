import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { specIndex, formatDuration } from '../../../common/util'
import { Table, Icon } from 'antd'

import * as musicActions from '../music.action'
import * as playerActions from '../../player/player.action'
import './content.less'

class Content extends Component {
    state = {
        dataSource: [],
        columns : [{
            title: '序列',
            dataIndex: 'sequence',
            key: 'sequence',
            render: (sequence) => {
                return (
                    <div className="sequence">
                        <Icon type="heart-o" />{sequence}
                    </div>
                )
            },
        }, {
            title: '歌曲',
            dataIndex: 'name',
            key: 'name',
            render: (name, song) => {
                return (
                    <div className="name">
                        <Icon type="caret-right" onClick={() => this.playSong(this.props.tracks[song.key])}/>{name}
                    </div>
                )
            },
        }, {
            title: '作者',
            dataIndex: 'artist',
            key: 'artist',
            render:(artist) => {
                return(
                    <div className="artist">
                        <Icon type="plus-circle" />{artist}
                    </div>
                )
            }
        }, , {
            title: '专辑',
            dataIndex: 'album',
            key: 'album',
        }, {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
        }]
    }
    componentDidMount() {
        const { tracks } = this.props
        let dataSource = []
        tracks.map((track, index) => {
            track.ar.map((t, index) => {
                dataSource.push({artist: t.name})
            })
            Object.assign(dataSource[index], {
                key: index,
                sequence: specIndex(index),
                name: track.name,
                album: track.al.name,
                time: formatDuration(track.dt)
            })
        })
        this.setState({
            dataSource: dataSource
        })
    }
    playSong = (song) => {
        const {dispatch} = this.props
        console.log(song)
        dispatch(playerActions.playSong(song))
    }
    render() {
        const { tracks, isShowAr = true } = this.props
        console.log(tracks)
        return (
            <div className="music-details-content">
                <p className="play-all-btn">播放全部({tracks.length})</p>
                <ul className="song-container">
                    <Table dataSource={this.state.dataSource} columns={this.state.columns}></Table>
                </ul>
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
export default connect(mapStateToProps)(Content)