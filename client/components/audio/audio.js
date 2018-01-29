import React, {Component} from 'react'
import {connect} from 'react-redux'
import AudioItem from './audioItem'
import './audio.less'
class Audio extends Component {
    render() {
        const {
            items,
            play_img,
            pause_img,
            dispatch
        } = this.props.audio
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
function mapStateToProps({audio}) {
    return {
        audio
    }
}
export default connect(mapStateToProps)(Audio)