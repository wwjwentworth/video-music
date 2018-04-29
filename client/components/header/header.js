import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import cookie from 'react-cookies'
import { Button } from 'antd'
import './header.less'
import * as headerActions from './header.action'
class Header extends Component {

    changePage = (index) => {
        const { dispatch } = this.props
        dispatch(headerActions.changePage(index))
    }
    
    removeCookie = () => {
        const {history} = this.props
        cookie.remove("user")
        setTimeout(() => {
            history.push("/")
        }, 300)
    }
    render() {
        const { header } = this.props
        const { logo_img, nav } = header
        console.log(window.location.pathname)
        return (
            <div className="wwj-header">
                <div className="logo">
                    <img src={require('../../assets/logo.png')} alt="" />
                </div>
                <ul className="nav">
                    <li className={`list-item ${window.location.pathname === '/' ? 'active' : ''}`} >
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className={`list-item ${window.location.pathname.indexOf("video") >= 0 ? 'active' : ''}`}>
                        <Link to="/video">VIDEO</Link>
                    </li>
                    <li className={`list-item ${window.location.pathname.indexOf("music") >= 0 ? 'active' : ''}`}>
                        <Link to="/music">MUSIC</Link>
                    </li>
                    <li className={`list-item ${window.location.pathname.indexOf("community") >= 0 ? 'active' : ''}`}>
                        <Link to="/community">COMMUNITY</Link>
                    </li>
                    {
                        !cookie.load("user") ?
                            <li className={`list-item ${window.location.pathname.indexOf("login") >= 0  ? 'active' : ''}`}>
                                <Link to="/login">LOGIN</Link>
                            </li> : null
                    }
                    {
                        !cookie.load("user") ?
                        <li className={`list-item ${window.location.pathname === '/register' ? 'active' : ''}`}>
                            <Link to="/register">REGISTER</Link>
                        </li> : null
                    }
                    {
                        cookie.load("user") ?
                            <li className="list-item">
                                <a>{cookie.load("user")}</a>
                            </li> : null
                    }
                    {
                        cookie.load("user") ?
                        <li className="list-item">
                            <a onClick={this.removeCookie}>LOGOUT</a>
                        </li> : null
                    }
                </ul>
            </div>
        )
    }
}
function mapStateToProps({ header}) {
    return {
        header,
    }
}
export default withRouter(connect(mapStateToProps)(Header))