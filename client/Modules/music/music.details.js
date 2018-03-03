import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as musicActions from './music.action'

import MusicDetailsHeader from './music-details-header/header'
import MusicDetailsContent from './music-details-song-list/content'
class MusicDetails extends Component {
    componentDidMount() {
        const { dispatch, match: { params: { musicID } } } = this.props
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