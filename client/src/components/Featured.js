import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { animated, useSpring } from 'react-spring';
import NumberFormat from 'react-number-format';

const AnimatedPrice = ({ toggle, price }) => {
  const style = useSpring({
    visibility: toggle ? 'visible' : 'hidden',
    transform: toggle ? 'translateY(0)' : 'translateY(10px)',
  });
  return (
    <animated.p style={style} className='text-muted text-uppercase'>
      From{' '}
      <NumberFormat
        value={price}
        displayType={'text'}
        thousandSeparator={true}
        thousandsGroupStyle={'lakh'}
        prefix={'₹'}
      />
    </animated.p>
  );
};

class Featured extends React.Component {
  state = {
    heading: 'Featuring',
    brandTag: 'NZXT Cases',
    animate: false,
    products: [
      {
        src: './images/ca_h210i_w1_img_main-600x600.jpg',
        caption: 'H210i M-ATX',
        price: {
          value: 12000,
          visible: false,
        },
      },
      {
        src: '/images/h510-matte-black-red-image-main-600x600.jpg',
        caption: 'H510 ATX',
        price: { value: 10000, visible: false },
      },
      {
        src: './images/h710i-matte-white-image-main-600x600.jpg',
        caption: 'H710i E-ATX',
        price: { value: 18000, visible: false },
      },
      {
        src: './images/ca-h510e-b1-images-main-600x600.jpg',
        caption: 'H510e ATX',
        price: { value: 14000, visible: false },
      },
    ],
  };

  toggle = () => {
    this.setState({ animate: !this.state.animate });
  };

  setAnimate = (index, animate) => {
    let products = [...this.state.products];
    products[index].price = {
      ...products[index].price,
      visible: animate,
    };
    this.setState({ products });
  };

  render() {
    const { heading, brandTag, products } = this.state;

    return (
      <div className='text-center mt-5' style={{ padding: '0 10% 0 10%' }}>
        <div className='title'>
          <p className='text-uppercase'>{heading}</p>
          <h2 className='text-uppercase'>{brandTag}</h2>
        </div>
        <Row className='products mt-5'>
          {products.map((product, index) => (
            <Col className='product' md={12 / products.length} xs='12'>
              <a href='' className='product-link'>
                <img
                  src={product.src}
                  alt=''
                  className='product-img'
                  onMouseEnter={(event) => this.setAnimate(index, true)}
                  onMouseLeave={(event) => this.setAnimate(index, false)}
                />
                <big className='product-caption'>{product.caption}</big>
                <AnimatedPrice
                  toggle={product.price.visible}
                  price={product.price.value}
                />
              </a>
            </Col>
          ))}
        </Row>
        <div className='w-100 d-flex justify-content-center'>
          <a
            href=''
            className='custom-btn text-uppercase'
            style={{
              padding: '0.7%',
              marginTop: '5rem',
              letterSpacing: '1px',
            }}>
            View All Products
          </a>
        </div>
      </div>
    );
  }
}

export default Featured;
