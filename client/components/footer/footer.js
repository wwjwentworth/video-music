import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './footer.less'
import * as headerActions from '../header/header.action'
class Footer extends Component{
    addActiveClassName(index) {
        const {dispatch} = this.props
       dispatch(headerActions.addActive(index))
    }
    render() {
        const {
            logo_img,
            nav_links,
            user_links
        } = this.props.header
        return (
            <div className="wwj-footer">
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
            </div>
        )
    }
}
function mapStateToProps({header}) {
    return {
        header
    }
}
export default connect(mapStateToProps)(Footer)