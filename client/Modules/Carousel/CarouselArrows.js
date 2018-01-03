import React, {Component} from 'react'
class CarouselArrows extends Component {
    handleArrowClick(option) {
        const {turn} = this.props
        turn(option)
    }
    render() {
        
        return(
            <div className="carousel-arrows-wrap">
                <span
                    className="carousel-arrow carousel-arrow-left"
                    onClick={this.handleArrowClick.bind(this, -1)}>
                    &lt;
                </span>
                <span
                    className="carousel-arrow carousel-arrow-right"
                    onClick={this.handleArrowClick.bind(this, -1)}>
                    &gt;
                </span>
            </div>
        )
    }
}
export default CarouselArrows