import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as headerActions from '../../components/header/header.action'
class Music extends Component{
    componentDidMount() {
        const {dispatch} = this.props
        dispatch(headerActions.refresh())
    }
    render() {
        return(
            <div>111</div>
        )
    }
}

function mapStateToProps({header}) {
    return {
        header
    }
}
export default connect(mapStateToProps)(Music)