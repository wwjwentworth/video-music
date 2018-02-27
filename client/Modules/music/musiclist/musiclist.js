import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as musicActions from '../music.action'
class MusicList extends Component {
    componentDidMount() {
        const {dispatch, music} = this.props
        const limit = 24, pagenum = 1;
        dispatch(musicActions.getMusicList(limit, pagenum))
    }
    render() {
        const {musicList} = this.props.music
        console.log(musicList)
        return (
            <div className="music-list">list
            </div>
        )
    }
}
function mapStateToProps({music }) {
    return {
        music
    }
}
export default connect(mapStateToProps)(MusicList)