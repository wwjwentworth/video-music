import React, {Component} from 'react'
import { connect } from 'react-redux'

import * as musicActions from './music.action'

import DetailsHeader from './music-details-header/header'
import DetailsContent from './music-details-song-list/content'
class MusicDetails extends Component {
    componentDidMount() {
        const {dispatch, match:{params:{musicID}}} = this.props
        dispatch(musicActions.getMusicDetails(musicID))
    }
    render() {
        const {musicDetails} = this.props.music
        return(
            <div className="wwj-music-details">
                <DetailsHeader playlist={musicDetails.playlist}></DetailsHeader>
                {
                    musicDetails.playlist ? 
                    <DetailsContent tracks={musicDetails.playlist.tracks}></DetailsContent> : null
                }
                
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