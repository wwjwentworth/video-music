import React, {Component} from 'react'
import {connect} from 'react-redux'
class Community extends Component {
    render() {
        const {community} = this.props
        const {musicList} = community
        return (
            <div className="wwj-community">
                {
                    musicList.map((music, index) => {
                        return(
                            <div key={index}>
                                {music.user}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
function mapStateToProps({community}) {
    return {
        community
    }
}
export default connect(mapStateToProps)(Community)