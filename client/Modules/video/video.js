import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Carousel from '../../components/carousel/carousel'
import * as videoActions from './video.action'
import * as headerAction from '../../components/header/header.action';
import './video.less'
class Videos extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        const href = window.location.href
        dispatch(videoActions.fetchBannerList('http://localhost:3000/videos_banner'))
        dispatch(videoActions.fetchPushonList('http://localhost:3000/videos_push_on'))
        dispatch(videoActions.fetchCutList('http://localhost:3000/videos_cut'))
        dispatch(headerAction.refresh(href))
    }
    linkToDetails(id) {
        const { dispatch } = this.props;
        dispatch(videoActions.fetchVideoDetails("http://localhost:3000/videos_details", id))
    }
    render() {
        const { video, audio } = this.props
        const  {bannerList} = video
        const bannerFetching = bannerList.isFetching
        const pushonFetching = pushonList.isFetching
        const cutFetching = cutList.isFetching
        return (
            <div className="wwj-video">
                <div className="banner">
                    {
                        !bannerFetching &&
                        <Carousel items={bannerList.items}
                            play_img={play_img}></Carousel>
                    }
                </div>
                <div className="content">
                    <div className="push-on">
                        <p className="title">YouToBe日推</p>
                        <ul className="list-wrap">
                            {
                                pushonFetching &&
                                <li className="list-item">
                                    <div className="loading">
                                        <div></div>
                                        <p>loading</p>
                                    </div>
                                </li>
                            }
                            {
                                !pushonFetching &&
                                pushonList.items.map((item, index) => {
                                    return (
                                        <li className="list-item"
                                            key={index}>
                                            <div className="post-img">
                                                <iframe src={item.src} frameBorder="0" allowFullScreen wmode="Opaque">
                                                </iframe>
                                            </div>
                                            <div className="post-text">
                                                <h2>
                                                    <a href={item.title.src}>{item.title.text}</a>
                                                </h2>
                                                <p>{item.info}</p>

                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="cut">
                        <p className="title">Cut混剪</p>
                        <ul className="list-wrap">

                            {
                                !cutFetching &&
                                cutList.items.map((item, index) => {
                                    return (
                                        <li className="list-item"
                                            key={index}>
                                            <div className="left" >
                                                <div className="wrap"></div>
                                                <Link to={'videos/' + (item._id)}>
                                                    <img src={item.img} alt="" />
                                                    <img src={play_img}
                                                        onClick={this.linkToDetails.bind(this, item._id)}
                                                        className="play" alt="" />
                                                </Link>

                                            </div>
                                            <div className="right">
                                                <p>{item.info}</p>
                                                <p></p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({video, audio}) {
    return {
        video,
        audio
    }
}
export default connect(mapStateToProps)(Videos)