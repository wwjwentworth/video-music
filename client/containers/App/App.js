import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import Home from '../../components/Home/Home'
import Videos from '../../components/Vidoes/Videos'
import VideoDetails from '../../components/Vidoes/VideoDetails'
import Music from '../../components/Music/Music'
import Community from '../../components/Community/Community'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import Header from '../../Modules/Header/Header'
import Footer from '../../Modules/Footer/Footer'
import './App.less'
class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="app">
                    <Header></Header>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/videos' component={Videos} />
                    <Route exact path="/videos/:videoID" component={VideoDetails} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/community' component={Community} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Footer></Footer>
                </div>
            </HashRouter>
        )
    }
}
export default App