import React, {Component} from 'react'
import {formatDuration, specIndex} from '../../../common/util'
import {Table, Icon} from 'antd'
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
            title: '操作',
            render:() => {
                return(
                    <div className="artist">
                        <Icon type="plus-circle"/>
                        <Icon type="caret-right" onClick={() => this.playSong(this.props.tracks[song.key])}/>{name}
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
        let dataSource = []
        this.props.hotSongs.map((track, index) => {
            dataSource.push({
                sequence:specIndex(index),
                name:track.name,
                album:track.al.name,
                time:formatDuration(track.dt)
            })
        })
        this.setState({
            dataSource:dataSource
        })
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
export default Content