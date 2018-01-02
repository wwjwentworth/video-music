import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import './Home.less'
class Home extends Component {
    render() {
        const {
            banner_arrow
        } = this.props
        console.log(this.props)
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
                                <img src={banner_arrow} alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    const home = state.home
    return {
        banner_arrow:home.banner_arrow
    }
}
export default connect(mapStateToProps)(Home)