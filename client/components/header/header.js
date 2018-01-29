import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.less'
import * as headerActions from './header.action'
class Header extends Component {

    addActive = (index) => {
        const {dispatch} = this.props
        dispatch(headerActions.addActive(index))
    }
    
    render() {
        const {match, history} = this.props
        const {
            logo_img,
            nav_links,
        } = this.props.header
        return (
            <div className="wwj-header">
                <div className="logo">
                    <img src={require('../../assets/logo.png')} alt="" />
                </div>
                <ul className="nav">
                    {
                        nav_links.map((link, index) => {
                            return (
                                <li key={index}
                                    className={link.active?"list-item active" :"list-item"}
                                    onClick={() => this.addActive(index)}
                                >
                                    <Link to={link.path}>{link.text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
function mapStateToProps({header}) {
    return {
        header
    }
}
export default connect(mapStateToProps)(Header)