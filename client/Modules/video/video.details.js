import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as headerActions from '../../components/header/header.action';
import *as videoActions from './video.action'
import './video.details.less'

class VideoDetails extends Component {
    componentDidMount() {
        const {match, dispatch} = this.props
        const {videoID} = match.params
        dispatch(headerActions.refresh())
        dispatch(videoActions.getVideoDetails(videoID))
    }
    render() {
        const { details, loading } = this.props.video
        return (
            <div className="wwj-video-details">
                <div className="post-video">
                {
                    loading &&
                    <div className="loading"><div></div><p>loading</p></div>
                }
                {
                    !loading && details.video &&
                    <video src={details.video} controls></video>
                }
                {
                    !loading && details.iframe &&
                    <iframe src={details.iframe} frameBorder="0" allowFullScreen wmode="Opaque"></iframe>
                }
                </div>
                <div className="post-details">
                    <p className="title">视频详情</p>
                    {
                        !loading&&
                        <p>{details.details}</p>
                    }
                </div>
                <div className="comment">
                    111
                </div>
            </div>
        )
    }
}
function mapStateToProps({video}) {
    return {
        video
    }
}
export default connect(mapStateToProps)(VideoDetails)