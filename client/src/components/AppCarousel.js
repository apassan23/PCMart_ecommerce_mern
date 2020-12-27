import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Container, Row, Col } from 'reactstrap';
import NumberFormat from 'react-number-format';

class AppCarousel extends React.Component {
  state = {
    items: [
      {
        src: './images/h410m-pro-vh-image-main-600x600.jpg',
        name: 'MSI H410M Pro-VH Motherboard',
        original: 6789,
        discounted: 5599,
        brand: 'MSI',
        rating: '4.4',
        reviews: 433,
        availability: true,
      },
      {
        src: './images/cmt32gx4m2c3000c15-images-02-600x600.jpg',
        name:
          'Corsair CMT32GX4M2C3000C15 Desktop Ram DOMINATOR PLATINUM RGB Series 32GB (16GBx2) DDR4 3000MHz',
        original: 19340,
        discounted: 17559,
        brand: 'Corsair',
        rating: 4.6,
        availability: false,
        reviews: 19,
      },
      {
        src: './images/zt-t20810a-10p-image-main-600x600.jpg',
        name: 'Zotac RTX 2080 TI Blower 11GB',
        original: 103950,
        discounted: 94999,
        brand: 'Zotac',
        rating: 4.2,
        availability: true,
        reviews: 562,
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <Container className='mt-5'>
        <h2 className='text-center'>Today's Deals</h2>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={42}
          totalSlides={items.length}
          className='carousel-provide'>
          <Slider>
            {items.map((item) => (
              <Slide>
                <Row>
                  <Col
                    md='6'
                    className='d-flex justify-content-end align-items-center'>
                    <img
                      src={item.src}
                      alt=''
                      style={{ height: '90%', width: '90%' }}
                    />
                  </Col>
                  <Col
                    md='6'
                    className='d-flex justify-content-start align-items-center'>
                    <div className='h-auto'>
                      <h2>{item.name}</h2>
                      <big>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='#ffa500'
                          className='bi bi-star-fill mr-2'
                          viewBox='0 0 16 16'
                          style={{ transform: 'translateY(-0.15rem)' }}>
                          <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        </svg>
                        {item.rating}
                      </big>
                      <small className='ml-2'>{item.reviews} reviews</small>
                      <div className='d-flex flex-row justify-content-start mt-4'>
                        <NumberFormat
                          value={item.discounted}
                          displayType={'text'}
                          thousandSeparator={true}
                          thousandsGroupStyle={'lakh'}
                          prefix={'₹'}
                          renderText={(value) => <h4>{value}</h4>}
                        />
                        <NumberFormat
                          value={item.original}
                          displayType={'text'}
                          thousandSeparator={true}
                          thousandsGroupStyle={'lakh'}
                          prefix={'₹'}
                          renderText={(value) => (
                            <p
                              className='ml-4 text-muted'
                              style={{
                                textDecoration: 'line-through',
                              }}>
                              {value}
                            </p>
                          )}
                        />
                        <p className='ml-3 text-success'>
                          {Math.floor(
                            ((item.original - item.discounted) /
                              item.original) *
                              100
                          )}
                          % off
                        </p>
                      </div>
                      <p
                        className={
                          item.availability ? 'text-success' : 'text-danger'
                        }>
                        {item.availability ? 'In Stock' : 'Out of Stock'}
                      </p>
                      <div className='d-flex mt-4'>
                        <button type='button' className='custom-btn w-50'>
                          Add to Cart
                        </button>
                        <button
                          type='button'
                          className='custom-btn-2 w-50 ml-3'>
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Slide>
            ))}
          </Slider>
          <div className='d-flex justify-content-center'>
            <ButtonBack className='arrow mr-1'>
              <svg
                width='1.5em'
                height='1.5em'
                viewBox='0 0 16 16'
                class='bi bi-chevron-left'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
                />
              </svg>
            </ButtonBack>
            <ButtonNext className='arrow'>
              <svg
                width='1.5em'
                height='1.5em'
                viewBox='0 0 16 16'
                class='bi bi-chevron-right'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </Container>
    );
  }
}

export default AppCarousel;
