import React, {Component} from 'react'
import { connect } from 'react-redux'

import * as musicActions from './music.action'

import DetailsHeader from './music-details-header/header'
class MusicDetails extends Component {
    componentDidMount() {
        const {dispatch, match:{params:{musicID}}} = this.props
        dispatch(musicActions.getMusicDetails(musicID))
    }
    render() {
        const {musicDetails} = this.props.music
        // console.log(musicDetails)
        return(
            <div className="wwj-music-details">
                <DetailsHeader playlist={musicDetails.playlist}></DetailsHeader>
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