import React from 'react';
import { Container } from 'reactstrap';

class Featured extends React.Component {
  state = {
    heading: 'Featuring',
    brandTag: 'NZXT Cases',
  };

  render() {
    const { heading, brandTag } = this.state;

    return (
      <Container className='text-center mt-5'>
        <div className='title'>
          <p className='text-uppercase'>{heading}</p>
          <h3 className='text-uppercase'>{brandTag}</h3>
        </div>
        <div className='products d-flex justify-content-evenly mt-5'>
          <div className='product'>
            <a href='' className='product-link'>
              <img
                src='./images/ca_h210i_w1_img_main-600x600.jpg'
                alt=''
                className='product-img'
              />
              <big className='product-caption'>H210i M-ATX</big>
            </a>
          </div>
          <div className='product'>
            <a href='' className='product-link'>
              <img
                src='./images/h510-matte-black-red-image-main-600x600.jpg'
                alt=''
                className='product-img'
              />
              <big className='product-caption'>H510 ATX</big>
            </a>
          </div>
          <div className='product'>
            <a href='' className='product-link'>
              <img
                src='./images/h710i-matte-white-image-main-600x600.jpg'
                alt=''
                className='product-img'
              />
              <big className='product-caption'>H710i E-ATX</big>
            </a>
          </div>
        </div>
        <div className='w-100 d-flex justify-content-center'>
          <a href='' className='btn text-uppercase'>
            View All Products
          </a>
        </div>
      </Container>
    );
  }
}

export default Featured;
