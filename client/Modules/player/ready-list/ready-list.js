import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'

import './ready-list.less'
class ReadyList extends Component {
    render() {
        return (
            <div className="wwj-ready-list">
                <div className="list-head">
                    <div>播放列表</div>
                    <div>收藏全部</div>
                    <div onClick={this.props.clearList}>清空</div>
                </div>
                <ul className="list-body">
                    {
                        this.props.playlist.map((list, index) => {
                            return(
                                <li key={index}
                                    className={list.id === this.props.song.id ? 'body-item active':'body-item'}>
                                    <div className="song-name"
                                        onClick={() => this.playSong(list, index)}>
                                        {list.name}    
                                    </div>
                                    <div className="song-artist">
                                        {
                                            list.ar.map(artist => (
                                                <Link to={`music/artist/${artist.id}`}
                                                    key={artist.id}>
                                                    {artist.name}
                                                </Link>    
                                            ))
                                        }
                                    </div>
                                    <div className="delete-btn">
                                        <Icon type="delete" onClick={() => this.deleteSong(list.id)} />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ReadyList