import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as musicActions from './music.action'
import * as headerActions from '../../components/header/header.action'
import MusicDetailsHeader from './music-details-header/header'
import MusicDetailsContent from './music-details-song-list/content'
import Player from '../player/player'
class MusicDetails extends Component {
    componentDidMount() {
        const { dispatch, match: { params: { musicID } } } = this.props
        dispatch(headerActions.refresh())
        dispatch(musicActions.getMusicDetails(musicID))
    }
    render() {
        const { musicDetails } = this.props.music
        return (
            <div className="wwj-music-details">
                <div className="wrap">
                    <MusicDetailsHeader playlist={musicDetails.playlist} />
                    {
                        musicDetails.playlist ?
                        <MusicDetailsContent tracks={musicDetails.playlist.tracks}/> : null
                    }

                </div>
                <Player></Player>
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
export default connect(mapStateToProps)(MusicDetails)