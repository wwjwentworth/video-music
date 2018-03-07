import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Video from '../../Modules/video/video'
import Music from '../../Modules/music/music'
import Artist from '../../Modules/artist/artist'
// import Community from '../../Modules/Community/Community'
import Login from '../../Modules/login/login'
import Register from '../../Modules/register/register'
import Header from '../../components/header/header'
import './App.less'
import videoDetails from '../../Modules/video/video.details';
import musicDetails from '../../Modules/music/music.details'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header></Header>
                    <Switch>
                        <Route exact path='/video' component={Video} />
                        <Route exact path='/video/:videoID' component={videoDetails} />
                        <Route exact path='/music' component={Music} />
                        <Route exact path='/' component={Music} />
                        <Route exact path='/music/:musicID' component={musicDetails}/>
                        <Route exact path='/music/artist/:artistID' component={Artist}/>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App