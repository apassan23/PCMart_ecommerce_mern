import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      arrows: false,
      initialSlide: 1,
    },
    items: [
      {
        id: 1,
        src: './images/hp_banner_k60_rgb_pro.webp',
        info: 'K60 Mechanical Gaming Keyboard',
      },
      {
        id: 2,
        src: './images/hp_banner_gift_guide.webp',
        info: 'Holiday Gift Guide 2020',
      },
      {
        id: 3,
        src: '/images/hp_banner_hs70_wired_still.webp',
        info: 'HS70 Bluetooth Gaming Headset',
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
    const arrowStyle = {
      fontSize: '3rem',
      color: '#fff',
    };
    return (
      <div style={{ height: '70vh' }} className='container-slick'>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {items.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt='' style={{ height: '70vh' }} />
              <div
                className='info-container'
                style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                <div className='text-center w-75 slick-text h-auto'>
                  <h3
                    style={{
                      color: 'white',
                      textShadow: '0 2px 10px rgba(0,0,0,0.5)',
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
                    <i class='bi bi-arrow-left' style={arrowStyle} />
                  </span>
                </div>
                <div className='slider-arrow-next d-flex align-items-center'>
                  <span
                    className='arrow-btn next'
                    onClick={(event) => this.next()}>
                    <i class='bi bi-arrow-right' style={arrowStyle} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
