import React, {Component} from 'react'
import {connect} from 'react-redux'
import AudioItem from './AudioItem'
import './Audio.less'
class Audio extends Component {
    render() {
        const {
            items,
            play_img,
            pause_img,
            dispatch
        } = this.props
        const count = items.length;
        let itemNodes = items.map((item, index) => {
            return(
                <AudioItem item={item}
                    count={count}
                    key={'item'+index}
                    index={index}
                    play_img={play_img}
                    pause_img={pause_img}
                    dispatch={dispatch}
                    >
                </AudioItem>
            )
        })
        return(
            <div className="audio">
                <ul>
                    {itemNodes}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const audio = state.audio
    return {
        items:audio.items,
        play_img:audio.play_img,
        pause_img:audio.pause_img
    }
}
export default connect(mapStateToProps)(Audio)