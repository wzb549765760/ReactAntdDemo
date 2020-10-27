import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import swiper1 from "@assets/swiper-1.png"
import swiper2 from "@assets/swiper-2.jpeg"
import swiper3 from "@assets/swiper-3.jpeg"
import { SwiperWrap } from "./styledCookbook"
const spaceCarousel = {
  padding: '16px',
  background: '#DEF1E5',
  overflow: ' hidden',
}

export default class Swiper extends Component {
  state = {
    data: [],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [swiper1, swiper2, swiper3],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite={true}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
