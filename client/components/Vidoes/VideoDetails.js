import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchVideoDetails} from '../../actions/fetchAction'
import './VideoDetails.less'
class VideoDetails extends Component {
    componentDidMount() {
        const id = window.location.href.split("videos/")[1]
        const {dispatch} = this.props
        dispatch(fetchVideoDetails("http://localhost:3000/videos_details", id))
    }
    render() {
        const { details } = this.props
        const detailsFetching = details.isFetching
        return (
            <div className="wwj-video-details">
                <div className="post-video">
                    {
                        !detailsFetching &&
                        <video src={details.items.video} controls autopley="autoplay"></video>
                    }
                </div>
                <div className="post-details">
                    <p className="title">视频详情</p>
                    {
                        !detailsFetching&&
                        <p>{details.items.details}</p>
                    }
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    const videoDetails = state.videoDetails
    return {
        details: videoDetails.details
    }
}
export default connect(mapStateToProps)(VideoDetails)