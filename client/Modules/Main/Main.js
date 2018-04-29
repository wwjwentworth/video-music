import React, {Component} from 'react'
import cookie from 'react-cookies'
import Header from '../../components/header/header'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import './Main.less'
class Main extends Component {
    render() {
        return(
            <div className="main">
                <Header />
                <div className="content">
                    <div className="avatar">
                        <div className="post-img"></div>
                        <p className="post-text">Hi,{cookie.load("user")},Welcome to Good Time</p>
                        
                    </div>
                    <p className="doc">Watch thousands of movies and listen music in one place</p>
                    <Button><Link to="/video">Start Your Free Trail</Link></Button>
                </div>
            </div>
        )
    }
}

export default Main