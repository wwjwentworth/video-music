import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../../Modules/home/home'
import Video from '../../Modules/video/video'
import Music from '../../Modules/music/music'
import Artist from '../../Modules/artist/artist'
// import Community from '../../Modules/Community/Community'
// import Login from '../../Modules/Login/Login'
// import Register from '../../Modules/Register/Register'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
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
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path='/video' component={Video} />
                        <Route exact path='/video/:videoID' component={videoDetails} />
                        <Route exact path='/music' component={Music} />
                        <Route exact path='/music/:musicID' component={musicDetails}/>
                        <Route exact path='/music/artist/:artistID' component={Artist}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App