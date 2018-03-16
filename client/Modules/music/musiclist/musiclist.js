import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as musicActions from '../music.action'
import './musiclist.less'
class MusicList extends Component {
    componentDidMount() {
        const { dispatch, music } = this.props
        const { limit, pageNum, musicList, scrollPoint } = music
        if (!musicList.length) {
            dispatch(musicActions.getMusicList(limit, pageNum))
        }
        this.contentNode.scrollTop = scrollPoint
    }
    componentWillUnmount() {
        const { dispatch } = this.props
        const { scrollTop } = this.contentNode
        // 记录滚动点
        dispatch(musicActions.keepScroll(scrollTop))
    }
    handleScroll = () => {
        const {
            scrollTop,
            clientHeight,
            scrollHeight,
          } = this.contentNode
        const { dispatch, music: { isLoading } } = this.props
        if (scrollTop + clientHeight === scrollHeight && !isLoading) {
            const { pageNum, limit } = this.props.music
            dispatch(musicActions.getMusicList(limit, pageNum))
        }
    }
    render() {
        const { musicList } = this.props.music
        return (
            <div className="music-list" ref={(node) => this.contentNode = node}
                onScroll={this.handleScroll} >
                <div className="wrap">
                    {
                        musicList.map((music, index) => {
                            return (
                                <div className="list-item" key={index}>
                                    <div className="img">
                                        <Link to={`/music/${music.id}`}>
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