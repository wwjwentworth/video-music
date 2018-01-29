import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../../Modules/home/home'
import Video from '../../Modules/video/video'
// import VideoDetails from '../../Modules/Vidoes/VideoDetails'
// import Music from '../../Modules/Music/Music'
// import Community from '../../Modules/Community/Community'
// import Login from '../../Modules/Login/Login'
// import Register from '../../Modules/Register/Register'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './App.less'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header></Header>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/video' component={Video} />
                    </Switch>
                    <Footer></Footer>
                </div>
                    {/* <Route exact path='/videos' component={Videos} />
                    <Route exact path="/videos/:videoID" component={VideoDetails} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/community' component={Community} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Footer></Footer> */}
            </BrowserRouter>
        )
    }
}
export default App