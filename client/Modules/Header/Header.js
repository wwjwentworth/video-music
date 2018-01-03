import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Header.less'
import { addActive } from '../../actions/headerAction';
class Header extends Component {
    componentDidMount() {
    }
    addActiveClassName(index) {
        const {dispatch} = this.props
       dispatch(addActive(index))
    }

    render() {
        const {
            logo_img,
            nav_links,
            user_links
        } = this.props
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
                                    onClick={this.addActiveClassName.bind(this, index)}
                                >
                                    <Link to={link.path}>{link.text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="user">
                    {
                        user_links.map((link, index) => {
                            return (
                                <li key={index}
                                    className={link.active?"list-item active" :"list-item"}
                                    onClick={this.addActiveClassName.bind(this, index)}
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
function mapStateToProps(state) {
    const header = state.header
    return {
        logo_img: header.img.logo,
        nav_links:header.nav_links,
        user_links:header.user_links
    }
}
export default connect(mapStateToProps)(Header)