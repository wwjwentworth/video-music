import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDuration, specIndex } from '../../../common/util'
import { Table, Icon } from 'antd'

import * as playerActions from '../../player/player.action'
import './content.less'
class Content extends Component {
    state = {
        dataSource: [],
    }
    componentDidMount() {
        const { hotSongs } = this.props
        let dataSource = []
        hotSongs.map((track, index) => {
            dataSource.push({
                sequence: specIndex(index),
                name: track.name,
                album: track.al.name,
                time: formatDuration(track.dt),
                key: index,
                track: track
            })
        })
        this.setState({
            dataSource: dataSource
        })
    }
    toggleLikeColor = () => {
        this.setState({
            likeColor: !this.state.likeColor
        })
    }
    playSong = (song) => {
        const { dispatch } = this.props
        dispatch(playerActions.playSong(song))
    }
    render() {
        return (
            <div className="artist-content">
                <ul className="song-container">
                    {
                        this.state.dataSource.map((data, index) => {
                            return (
                                <li key={index} className={index % 2 === 0 ? 'list-item active' : 'list-item'}>
                                    <p className="name">
                                        {data.sequence}
                                        <Icon type="caret-right" onClick={() => this.playSong(data.track)} />
                                        {data.name}
                                    </p>
                                    <p>{data.album}</p>
                                    <p className="time">{data.time}</p>
                                </li>
                            )
                        })
                    }
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