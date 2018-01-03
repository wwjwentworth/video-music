import React, { Component } from 'react'
class CarouselItem extends Component {

    render() {
        const { count, item, play_img } = this.props
        const width = 100 / count + '%'
        console.log(this.props)
        return (
            <li className="carousel-item" style={{ width: width }}>
                <div className="wrap"></div>
                <div className="content">
                    <img src={item.img} alt="" />
                    <div>
                        {
                            item.text_ch &&
                            <p className="text text-ch">{item.text_ch}</p>
                        }
                        {
                            item.text_en &&
                            <p className="text text-en">{item.text_en}</p>
                        }
                        {
                            item.text_ch &&
                            <button>START YOUR TRAIL</button>
                        }
                        {
                            item.director &&
                            <div className="post">
                                <div className="post-wrap"></div>
                                <div className="wrap-content">
                                    <p className="item title">{item.title}</p>
                                    <p className="item date">{item.date}</p>
                                    <p className="item director">{item.director}</p>
                                    <p className="item actors">{item.actors}</p>
                                    <p className="item info">{item.info}</p>
                                    <img src={play_img} alt="" />
                                </div>
                            </div>
                        }


                    </div>

                </div>

            </li>
        )
    }
}
export default CarouselItem