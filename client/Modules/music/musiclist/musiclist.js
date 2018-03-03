import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as musicActions from '../music.action'
import './musiclist.less'
class MusicList extends Component {
    componentDidMount() {
        const { dispatch, music } = this.props
        const {limit, pageNum, musicList, scrollPoint} = music
        if (!musicList.length) {
            dispatch(musicActions.getMusicList(limit, pageNum))
        }
        this.contentNode.scrollTop = scrollPoint
    }
    handleScroll = () => {
        const {
            scrollTop,
            clientHeight,
            scrollHeight,
          } = this.contentNode
        const {dispatch, music:{isFetching}} = this.props
        if (scrollTop + clientHeight === scrollHeight && !isFetching) {
            const { pageNum, limit } = this.props.music
            dispatch(musicActions.getMusicList(limit, pageNum))
          }
        // console.log(this.contentNode)
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