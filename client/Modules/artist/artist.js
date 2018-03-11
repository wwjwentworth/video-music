import React, {Component} from 'react'
import { connect } from 'react-redux'

import * as artistActions from './artist.action'
import * as headerActions from '../../components/header/header.action'

import ArtistHeader from './artist-header/header'
import ArtistContent from './artist-content/content'
import Player from '../player/player'

import './artist.less'
class Artist extends Component {
    componentDidMount() {
        const {dispatch, match:{params:{artistID}}} = this.props
        dispatch(headerActions.refresh())
        dispatch(artistActions.getArtistList(artistID))
    }
    renderArtistInfo = (artistList) => {
        if(artistList === null) return null;
        else {
            const {artist, hotSongs} = artistList
            return (
                <div className="artist-info">
                    <ArtistHeader artist={artist} />
                    <ArtistContent hotSongs={hotSongs}/>
                </div>
            )
        }
    }
    render() {
        const {isLoading, artistList} = this.props.artist
        console.log(this.props)
        return(
            <div className="artist-page">
                {
                    !isLoading ? 
                    <div className="wrap">
                        {this.renderArtistInfo(artistList)}
                    </div>
                    :null
                }
                {
                    isLoading ? 
                    <div className="loading">
                        <div></div>
                        <p>loading</p>
                    </div> : null
                }
                <Player></Player>
            </div>
        )
    }
}
function mapStateToProps({ artist, header }) {
    return {
        artist,
        header
    }
}
export default connect(mapStateToProps)(Artist)