import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Carousel from '../../components/carousel/carousel'
import * as videoActions from './video.action'
import * as headerActions from '../../components/header/header.action';
import './video.less'
class Videos extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        this.getBannerList()
        dispatch(headerActions.refresh())
    }
    linkToDetails = (id) => {
        const { match: { params }, history, } = this.props
        history.push(`/video/${id}`)
    }
    getBannerList() {
        const { dispatch, match } = this.props
        dispatch(videoActions.getBannerList())
        dispatch(videoActions.getPushOnList())
        dispatch(videoActions.getCutList())
    }
    render() {
        return (
            <div className="wwj-video">
                {this.renderBanner(this.props.video)}
                <div className="content">
                    {this.renderPushOnList(this.props.video)}
                    {this.renderCutList(this.props.video)}
                </div>
            </div>
        )
    }
    renderBanner = (state) => {
        const { loading, bannerList, imgs } = state
        if (!loading) {
            return (
                <div className="banner">
                    {
                        !loading &&
                        <Carousel items={bannerList}
                            play_img={imgs.play_img}>
                        </Carousel>
                    }
                </div>
            )
        } else {
            return (
                <div className="banner">
                    <div className="loading">
                        <div></div>
                        <p>loading</p>
                    </div>
                </div>
            )
        }
    }

    renderPushOnList = (state) => {
        const { loading, pushOnList } = state
        if (!loading) {
            return (
                <div className="push-on">
                    <p className="title">YouToBe日推</p>
                    <ul className="list-wrap">
                        {
                            pushOnList.map((item, index) => {
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
            )
        } else {
            return (
                <div className="push-on">
                    <ul className="list-wrap">
                        <li className="list-item">
                            <div className="loading">
                                <div></div>
                                <p>loading</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )
        }
    }

    renderCutList = (state) => {
        const { loading, cutList, imgs } = state
        if (!loading) {
            return (
                <div className="cut">
                    <p className="title">Cut混剪</p>
                    <ul className="list-wrap">
                        {
                            cutList.map((item, index) => {
                                return (
                                    <li className="list-item"
                                        key={index}>
                                        <div className="left" >
                                            <div className="wrap"></div>
                                            <img src={item.img} className="post" />
                                            <img src={imgs.play_img}
                                                onClick={() => {
                                                    this.linkToDetails(item._id)
                                                }}
                                                className="play" alt="" />

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
            )
        } else {
            return (
                <div className="cut">
                    <ul className="list-wrap">
                        <div className="loading">
                            <div></div>
                            <p>loading</p>
                        </div>
                    </ul>
                </div>
            )
        }

    }
}

function mapStateToProps({ video, audio }) {
    return {
        video,
        audio
    }
}
export default connect(mapStateToProps)(Videos)