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
import { addItem } from '../actions/cartActions';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types';

class AppCarousel extends React.Component {
  state = {
    items: [
      {
        img: ['./images/h410m-pro-vh-image-main-600x600.jpg'],
        title: 'MSI H410M Pro-VH Motherboard',
        original: 6789,
        discounted: 5599,
        brand: 'MSI',
        rating: '4.4',
        reviews: 433,
        availability: true,
        product_type: 'motherboard',
      },
      {
        img: ['./images/cmt32gx4m2c3000c15-images-02-600x600.jpg'],
        title:
          'Corsair CMT32GX4M2C3000C15 Desktop Ram DOMINATOR PLATINUM RGB Series 32GB (16GBx2) DDR4 3000MHz',
        original: 19340,
        discounted: 17559,
        brand: 'Corsair',
        rating: 4.6,
        availability: false,
        reviews: 19,
        product_type: 'memory',
      },
      {
        img: ['./images/zt-t20810a-10p-image-main-600x600.jpg'],
        title: 'Zotac RTX 2080 TI Blower 11GB',
        original: 103950,
        discounted: 94999,
        brand: 'Zotac',
        rating: 4.2,
        availability: true,
        reviews: 562,
        product_type: 'graphic_card',
      },
    ],
  };

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  render() {
    const { items } = this.state;
    const arrowStyle = {
      fontSize: '1.5rem',
    };
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
                      src={item.img[0]}
                      alt=''
                      style={{ height: '90%', width: '90%' }}
                    />
                  </Col>
                  <Col
                    md='6'
                    className='d-flex justify-content-start align-items-center'>
                    <div className='h-auto'>
                      <h2>{item.title}</h2>
                      <big>
                        <i
                          className='bi bi-star-fill mr-2'
                          style={{ color: '#ffa500', fontSize: '1rem' }}
                        />
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
                        <button
                          type='button'
                          className='custom-btn w-50'
                          onClick={(event) => {
                            item.cost = item.discounted;
                            this.props.addItem({ ...item, qty: 1 });
                          }}>
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
              <i class='bi bi-chevron-left' style={arrowStyle} />
            </ButtonBack>
            <ButtonNext className='arrow'>
              <i class='bi bi-chevron-right' style={arrowStyle} />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </Container>
    );
  }
}

export default connect(null, { addItem })(AppCarousel);
