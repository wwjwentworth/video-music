import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as headerActions from '../../components/header/header.action'

import MusicList from './musiclist/musiclist'
import  './music.less'
import {Tabs} from 'antd'
const TabPane = Tabs.TabPane;
class Music extends Component {
    
    componentDidMount() {
        
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
                <div className="views">

                </div>
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