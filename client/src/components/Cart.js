import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import {
  increaseQty,
  decreaseQty,
  deleteItem,
  clear,
} from '../actions/cartActions';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  static propTypes = {
    increaseQty: PropTypes.func.isRequired,
    decreaseQty: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    products: PropTypes.array,
    totalItems: PropTypes.number,
    totalPrice: PropTypes.number,
  };
  addQty = (product) => {
    this.props.increaseQty(product);
  };

  decreaseQty = (product) => {
    if (product.qty === 1) this.props.deleteItem(product);
    else this.props.decreaseQty(product);
  };

  render() {
    const { products, totalItems } = this.props;
    const circleStyle = {
      fontSize: '1.5rem',
    };
    return (
      <Container className='' style={{ minHeight: '100vh' }}>
        <h1 className='display-4 text-center mt-5 text-uppercase'>Cart</h1>
        <h4 className='text-center text-muted'>This is the Cart Page.</h4>
        {products && totalItems !== 0 ? (
          <Row className='mt-5 h-75'>
            <Col md='9'>
              {products.map((product) => (
                <Row className='' key={product._id}>
                  <Col md='6' className='d-flex'>
                    <img src={product.img[0]} alt='' className='w-25 mr-3' />
                    <div>
                      <h4>{product.title}</h4>
                      <big className='text-muted text-capitalize'>
                        {product.product_type.replace('_', ' ')}
                      </big>
                    </div>
                  </Col>
                  <Col md='2' xs='4'>
                    <big className='d-flex'>
                      <button
                        className='cart-btn'
                        onClick={(event) => this.decreaseQty(product)}>
                        <i
                          className='bi bi-dash-circle-fill mr-3'
                          style={circleStyle}
                        />
                      </button>
                      <p style={{ transform: 'translateY(0.4rem)' }}>
                        {product.qty}
                      </p>
                      <button
                        className='cart-btn'
                        onClick={(event) => this.addQty(product)}>
                        <i
                          className='bi bi-plus-circle-fill ml-3'
                          style={circleStyle}
                        />
                      </button>
                    </big>
                  </Col>
                  <Col md='4' className='d-flex justify-content-end' xs='8'>
                    <NumberFormat
                      value={product.cost * product.qty}
                      displayType={'text'}
                      thousandSeparator={true}
                      thousandsGroupStyle={'lakh'}
                      prefix={'₹'}
                      renderText={(value) => <h3>{value}</h3>}
                    />
                  </Col>
                </Row>
              ))}
            </Col>
            <Col md='3' className='h-50' id='cart-details'>
              <div
                className='w-100 p-4'
                style={{ border: 'solid 1px rgba(170,170,170,0.7)' }}>
                <p className='text-muted'>Total Items</p>
                <h4>{this.props.totalItems}</h4>
                <p className='text-muted mt-3'>Total Payment</p>
                <NumberFormat
                  value={this.props.totalPrice}
                  displayType={'text'}
                  thousandSeparator={true}
                  thousandsGroupStyle={'lakh'}
                  prefix={'₹'}
                  renderText={(value) => <h4>{value}</h4>}
                />
                <div className='mt-4'>
                  <hr />
                  <div className='d-flex'>
                    <button className='custom-btn p-2 text-uppercase w-50'>
                      Checkout
                    </button>
                    <button
                      className=' clear-btn text-uppercase w-50'
                      onClick={(event) => this.props.clear()}>
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <h4 className='text-center mt-5'>Cart is Empty.</h4>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
  totalItems: state.cart.totalItems,
  totalPrice: state.cart.totalPrice,
});

export default connect(mapStateToProps, {
  increaseQty,
  decreaseQty,
  deleteItem,
  clear,
})(Cart);
