import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchVideoDetails} from '../../actions/fetchAction'
import { refresh } from '../../actions/headerAction';
import './VideoDetails.less'

class VideoDetails extends Component {
    componentDidMount() {
        const id = window.location.href.split("videos/")[1]
        const href = window.location.href
        const {dispatch} = this.props
        dispatch(fetchVideoDetails("http://localhost:3000/videos_details", id))
        dispatch(refresh(href))
    }
    render() {
        const { details } = this.props
        const detailsFetching = details.isFetching
        return (
            <div className="wwj-video-details">
                <div className="post-video">
                {
                    detailsFetching&&
                    <div className="loading"><div></div><p>loading</p></div>
                }
                    {
                        !detailsFetching && details.items.video &&
                        <video src={details.items.video} controls></video>
                    }
                    {
                        !detailsFetching && details.items.iframe &&
                        <iframe src={details.items.iframe} frameBorder="0" allowFullScreen wmode="Opaque"></iframe>
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