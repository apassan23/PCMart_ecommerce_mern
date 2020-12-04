import React from "react";
import Slider from "react-slick";
import { Button } from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Carousel extends React.Component {
  state = {
    settings: {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      fade: true,
    },
    items: [
      {
        id: 1,
        src: "./images/hp_banner_k60_rgb_pro.webp",
        info: "K60 Mechanical Gaming Keyboard",
      },
      {
        id: 2,
        src: "./images/hp_banner_gift_guide.webp",
        info: "Holiday Gift Guide 2020",
      },
      {
        id: 3,
        src: "/images/hp_banner_hs70_wired_still.webp",
        info: "HS70 Bluetooth Gaming Headset",
      },
    ],
  };

  next() {
    if (this.slider) this.slider.slickNext();
  }

  prev() {
    if (this.slider) this.slider.slickPrev();
  }

  render() {
    const { settings, items } = this.state;
    return (
      <Slider ref={(c) => (this.slider = c)} {...settings}>
        {items.map((item) => (
          <div key={item.id}>
            <img src={item.src} alt='' />
            <div
              className='info-container'
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
              <div className='text-center  w-75 slick-text'>
                <h3
                  style={{
                    color: "white",
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                  }}
                  className='display-3 font-weight-bold text-uppercase text-wrap slick-text'>
                  {item.info}
                </h3>
                <a className='slick-btn mt-5' href='https://www.amazon.in'>
                  SHOP NOW
                </a>
              </div>
              <div className='slider-arrow-previous d-flex align-items-center'>
                <span
                  className='arrow-btn prev'
                  onClick={(event) => this.prev()}>
                  <svg
                    width='3em'
                    height='3em'
                    viewBox='0 0 16 16'
                    class='bi bi-arrow-left'
                    fill='#fff'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill-rule='evenodd'
                      d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
                    />
                  </svg>
                </span>
              </div>
              <div className='slider-arrow-next d-flex align-items-center'>
                <span
                  className='arrow-btn next'
                  onClick={(event) => this.next()}>
                  <svg
                    width='3em'
                    height='3em'
                    viewBox='0 0 16 16'
                    class='bi bi-arrow-right'
                    fill='#fff'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill-rule='evenodd'
                      d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }
}

export default Carousel;
