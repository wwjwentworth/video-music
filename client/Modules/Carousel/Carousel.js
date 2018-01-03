import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeNowLocal} from '../../actions/carouselAction'
import CarouselItem from './CarouselItem'
import CarouselArrows from './CarouselArrows'
import CarouselDots from './CarouselDots'
import './Carousel.less'
class Carousel extends Component{
    componentDidMount() {
    }
    turn(now) {
        const {nowLocal, items, dispatch} = this.props
        now = nowLocal+now;
        if(now < 0) {
            now += items.length
        }
        if(now >= items.length) {
            now -= items.length
        }
        dispatch(changeNowLocal(now))
    }
    goPlay() {

    }
    pausePlay() {

    }
    render() {
        const {
            items, play_img,nowLocal,speed,arrows,dots,pause
        } = this.props
        const count = items.length;
        let itemNodes = items.map((item, index) => {
            return(
                <CarouselItem item={item}
                    count={count}
                    key={'item'+index}
                    play_img={play_img}>
                </CarouselItem>
            )
        })
        let arrowsNodes = <CarouselArrows turn={this.turn.bind(this)}/>
        let dotsNodes = <CarouselDots turn={this.turn.bind(this)} count={count} nowLocal={nowLocal}/>
        return(
            <div className="carousel"
                onMouseOver={pause?this.pausePlay.bind(this):null}
                onMouseOut={pause?this.goPlay.bind(this):null}>
                <ul style={{
                    left:-100*nowLocal+'%',
                    transitionDuration:speed+'s',
                    width:items.length*100+'%'
                }}>
                    {itemNodes}
                </ul>
                {arrows?arrowsNodes:null}
                {dots?dotsNodes:null}
            </div>
        )
    }
}
function mapStateToProps(state) {
    const carousel = state.carousel
    return {
        nowLocal:carousel.nowLocal,
        speed:carousel.speed,
        arrows:carousel.arrows,
        dots:carousel.dots,
        pause:carousel.pause,
    }
}
export default connect(mapStateToProps)(Carousel)