import React, { Component } from 'react'
class CarouselArrows extends Component {
    handleArrowClick = (option) => {
        const { turn } = this.props
        turn(option)
    }
    render() {
        return (
            <div className="carousel-arrows-wrap">
                {
                    // !(this.props.nowLocal == this.props.count.length) &&
                    <span
                        className="carousel-arrow carousel-arrow-left"
                        onClick={() => this.handleArrowClick(-1)}>
                        &lt;
                    </span>
                }
                {
                    // !(this.props.nowLocal == 0) &&
                    <span
                        className="carousel-arrow carousel-arrow-right"
                        onClick={() => this.handleArrowClick(-1)}>
                        &gt;
                    </span>
                }

            </div>
        )
    }
}
export default CarouselArrows