import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { video_addActive } from '../../actions/videoAction'
import Carousel from '../../components/Carousel/Carousel'
import Audio from '../../components/Audio/Audio'
import './home.less'
import { addActive } from '../../actions/videoAction';
class Home extends Component {
    addActiveClassName(index) {
        const { dispatch } = this.props
        dispatch(video_addActive(index))
    }
    componentDidMount() {
        console.log(this.props.home)
    }
    render() {
        const {home} = this.props
        const {
            banner_arrow,
            option_vimg,
            category            
        } = this.props.home
        return (
            <div className="home">
                <div className="banner">
                    <div className="banner-content">
                        <ul className="list-wrap">
                            <li className="list-item">LIMITED TIME OFFER</li>
                            <li className="list-item">All Your TV In One Place</li>
                            <li className="list-item">Watch thousands of shows and movies, width plans starting at $5.99/month for a limited itme.*</li>
                            <li className="list-item">HBO, SHOWTIME, and CIMEMAX available as add-ons</li>
                            <li className="list-item">
                                <button>START YOUR FREE TRIAL</button>
                            </li>
                            <li className="list-item">PLAN OPTIONS</li>
                            <li className="list-item">
                                <img src={banner_arrow} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-content">
                    <div className="category">
                        <p className="title">What's on GoodTime</p>
                        <div className="movies" id="movies">
                            <div className="left movies-left item">
                                <p className="text">Watch Thousands of Shows and Movies Anytime, Anywhere</p>
                                <button className="btn">START YOUR TRAIL</button>
                            </div>
                            <div className="right movies-right item">
                                <Carousel items={category}/>
                            </div>
                        </div>
                        <div className="music">
                            <div className="right music-right item">
                                <Audio />
                            </div>
                            <div className="left music-left item">
                                <p className="text">Watch Thousands of Shows and Movies Anytime, Anywhere</p>
                                <button className="btn">START YOUR TRAIL</button>
                            </div>

                        </div>
                    </div>
                    <div className="option">
                        <div className="wrap"></div>
                        <div className="content">
                            <p className="title">Start Your Free Trail</p>
                            <div className="content-wrap">
                                <div className="videos item">
                                    <p className="item-title">
                                        <img src={option_vimg} alt="" />
                                        Videos
                                    </p>
                                    
                                    <div className="btn">START YOUR FREE TRAIL</div>
                                </div>
                                <div className="music item"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({home}) => {
    return {
        home
    }
}

export default connect(mapStateToProps)(Home)