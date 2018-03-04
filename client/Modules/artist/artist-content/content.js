import React, {Component} from 'react'
import { connect } from 'react-redux'
import {formatDuration, specIndex} from '../../../common/util'
import {Table, Icon} from 'antd'

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
                        {sequence}
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
                        {name}
                    </div>
                )
            },
        }, {
            title: '操作',
            render:(song) => {
                return(
                    <div className="operation">
                        <Icon type="caret-right" onClick={() => this.playSong(song)}/>
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
        const { hotSongs} = this.props
        let dataSource = []
        hotSongs.map((track, index) => {
            dataSource.push({
                sequence:specIndex(index),
                name:track.name,
                album:track.al.name,
                time:formatDuration(track.dt),
                key:index
            })
        })
        this.setState({
            dataSource:dataSource
        })
    }
    toggleLikeColor = () => {
        this.setState({
            likeColor:!this.state.likeColor
        })
    }
    playSong = (song) => {
        const {dispatch, hotSongs} = this.props
        dispatch(playerActions.playSong(hotSongs[song.key]))
        console.log(song)
    }
    render() {
         const { tracks, isShowAr = true } = this.props.hotSongs
        return (
            <div className="artist-content">
                <Table dataSource={this.state.dataSource} columns={this.state.columns}
                    pagination={false} />
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