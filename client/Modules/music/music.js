import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as headerActions from '../../components/header/header.action'
import cookie from 'react-cookies'
import MusicList from './musiclist/musiclist'
import Player from '../player/player'
import  './music.less'
import {Tabs} from 'antd'
const TabPane = Tabs.TabPane;
class Music extends Component {
    
    componentDidMount() {
        const {dispatch} = this.props
        dispatch(headerActions.refresh())
        if(cookie.load("user")) {
            dispatch(headerActions.setUser())
        }
    }
    
    render() {
        return (
            <div className="wwj-music">
                <Tabs defaultActiveKey="musicList" className="tabs">
                    <TabPane tab="个性推荐" key="recommend">个性推荐</TabPane>
                    <TabPane tab="歌单" key="musicList">
                        <MusicList></MusicList>
                    </TabPane>
                </Tabs>
                <Player></Player>
            </div>
        )
    }
}

function mapStateToProps({ header, music }) {
    return {
        header,
        music
    }
}
export default connect(mapStateToProps)(Music)