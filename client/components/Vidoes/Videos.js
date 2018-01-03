import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Carousel from '../../Modules/Carousel/Carousel'
import {
    fetchBannerList,
    fetchPushonList,
    fetchCutList,
    fetchVideoDetails
} from '../../actions/fetchAction'
import './Videos.less'
class Videos extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchBannerList('http://localhost:3000/videos_banner'))
        // dispatch(fetchPushonList('http://localhost:3000/videos_push_on'))
        dispatch(fetchCutList('http://localhost:3000/videos_cut'))
    }
    render() {
        const { bannerList, pushonList, cutList, play_img } = this.props
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
                        <ul className="list-item">
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
                                                <Link to={'videos/'+(item._id)}>
                                                    <img src={item.img} alt=""/>
                                                    <img src={play_img}
                                                    className="play" alt=""/>
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
function mapStateToProps(state) {
    const audio = state.audio
    const video = state.video
    return {
        play_img: audio.play_img,
        bannerList: video.bannerList,
        pushonList: video.pushonList,
        cutList: video.cutList
    }
}
export default connect(mapStateToProps)(Videos)