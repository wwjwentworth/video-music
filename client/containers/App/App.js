import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Video from '../../Modules/video/video'
import Music from '../../Modules/music/music'
import Artist from '../../Modules/artist/artist'
import Community from '../../Modules/community/community'
import Login from '../../Modules/login/login'
import Register from '../../Modules/register/register'
import './App.less'
import videoDetails from '../../Modules/video/video.details';
import musicDetails from '../../Modules/music/music.details'
import Page404 from '../../Modules/page404/page404'
class App extends Component {
    render() {
        return (
            <BrowserRouter >
                <div className="app">
                    <Switch>
                        <Route exact path='/video' component={Video} />
                        <Route exact path='/video/:videoID' component={videoDetails} />
                        <Route exact path='/music' component={Music} />
                        <Route exact path='/' component={Music} />
                        <Route exact path='/music/:musicID' component={musicDetails}/>
                        <Route exact path='/music/artist/:artistID' component={Artist}/>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/community' component={Community} />
                        <Route component={Page404}/>
                    </Switch>
                    
                </div>
            </BrowserRouter>
        )
    }
}
export default App