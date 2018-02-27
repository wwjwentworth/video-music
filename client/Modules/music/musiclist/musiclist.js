import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import * as musicActions from '../music.action'
import './musiclist.less'
class MusicList extends Component {
    componentDidMount() {
        const { dispatch, music } = this.props
        const limit = 24, pagenum = 1;
        dispatch(musicActions.getMusicList(limit, pagenum))
    }
    render() {
        const { musicList } = this.props.music
        console.log(musicList)
        return (
            <div className="music-list">
                {
                    musicList.map((music, index) => {
                        return (
                            <div className="list-item" key={index}>
                                <div className="img">
                                    <Link to={`/music/${music.id}` }>
                                        <img src={music.imgUrl} alt="playlist-cover" />
                                    </Link>
                                </div>
                                <div className="title">{music.title}</div>
                                <div className="creator">{music.creator}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
function mapStateToProps({ music }) {
    return {
        music
    }
}
export default connect(mapStateToProps)(MusicList)