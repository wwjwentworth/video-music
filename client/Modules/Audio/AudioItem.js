import React, { Component } from 'react'
import { play, pause } from '../../actions/audioAction'
class AudioItem extends Component {
    componentDidMount() {

    }
    playAudio(index) {
        const { dispatch, item } = this.props
        let audioNode = this.refs.audio
        const duration = Math.ceil(audioNode.duration)
        dispatch(play(index, duration))
        console.log(this.props)
        if (item.play) {
            audioNode.play()
        }
    }
    pauseAudio(index) {
        const { dispatch, item } = this.props
        dispatch(pause(index))
        let audioNode = this.refs.audio

        if (!item.play) {
            audioNode.pause()
        }
    }
    render() {
        const { play_img, pause_img, item, index } = this.props
        const transition = 'width ' + item.duration + ' ease'
        return (
            <li className="audio-item">
                <div className="wrap"></div>
                <div className="content">
                    <img src={play_img} alt=""
                        className={item.play ? "hidden" : ""}
                        onClick={this.playAudio.bind(this, index)} />
                    <img src={pause_img} alt=""
                        className={!item.play ? "hidden" : ""}
                        onClick={this.pauseAudio.bind(this, index)} />
                    <audio src={item.src} controls ref="audio"></audio>
                    <div className={"progress " + (!item.play ? "hidden" : "")}
                        style={{
                            width:"100%",
                            transition:transition
                        }}
                        >
                    </div>
                </div>

            </li>
        )
    }
}
export default AudioItem