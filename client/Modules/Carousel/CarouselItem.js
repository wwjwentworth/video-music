import React, { Component } from 'react'
class CarouselItem extends Component {

    render() {
        const { count, item } = this.props
        const width = 100 / count + '%'
        return (
            <li className="carousel-item" style={{ width: width }}>
                <div className="wrap"></div>
                <div className="content">
                    <p>{item.text_ch}</p>
                    <p>{item.text_en}</p>
                    <button>START YOUR TRAIL</button>
                </div>

            </li>
        )
    }
}
export default CarouselItem