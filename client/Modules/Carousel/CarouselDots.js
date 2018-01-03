import React, {Component} from 'react'
class CarouselDots extends Component {
    componentDidMount() {
    }
    handleDotClick(i) {
        const {nowLocal, turn} = this.props
        let option = i - nowLocal
        turn(option)
    }
    render() {
        const dotsNodes = []
        const {count, nowLocal} = this.props
        for(let i = 0; i < count; i++) {
            dotsNodes[i] = (
                <span
                    key={'dot'+i}
                    className={'carousel-dot '+(i===nowLocal?"carousel-dot-selected":"")}
                    onClick={this.handleDotClick.bind(this, i)}>
                </span>
            )
        }
        return(
            <div className="carousel-dots-wrap">
                {dotsNodes}
            </div>
        )
    }
}
export default CarouselDots