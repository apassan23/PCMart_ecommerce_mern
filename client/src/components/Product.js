import React from 'react';
import { connect } from 'react-redux';
import CustomSpinner from './CustomSpinner';
import { getProduct } from '../actions/productActions';
import PropsTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import NumberFormat from 'react-number-format';

class Product extends React.Component {
  state = {
    data: {},
  };

  static propTypes = {
    product: PropsTypes.object,
    loading: PropsTypes.bool.isRequired,
  };

  componentDidMount() {
    const { product } = this.props;
    if (product && Object.keys(product).length !== 0)
      this.setState({ data: product });
    else this.props.getProduct(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      this.setState({ data: this.props.product });
    }
  }

  render() {
    const { data } = this.state;
    let deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 2);
    let content = (
      <Container
        style={{ height: '70vh' }}
        className='d-flex justify-content-center align-items-center'>
        {Object.keys(data).length !== 0 ? (
          <Row className='mt-5'>
            <Col
              md='6'
              className='d-flex justify-content-center align-items-center'>
              <img
                src={data.img[0]}
                alt=''
                style={{ height: '90%', width: '70%' }}
              />
            </Col>
            <Col md='6' className='mt-5'>
              <h1>{data.title}</h1>
              <p>
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
                <big>{data.rating}</big>
              </p>
              <div className='d-flex mt-4'>
                <NumberFormat
                  value={data.cost}
                  displayType={'text'}
                  thousandSeparator={true}
                  thousandsGroupStyle={'lakh'}
                  prefix={'₹'}
                  renderText={(value) => <h3>{value}</h3>}
                />

                <NumberFormat
                  value={data.cost + data.discount}
                  displayType={'text'}
                  thousandSeparator={true}
                  thousandsGroupStyle={'lakh'}
                  prefix={'₹'}
                  renderText={(value) => (
                    <p
                      className='mx-4 text-muted'
                      style={{
                        textDecoration: 'line-through',
                      }}>
                      {value}
                    </p>
                  )}
                />
                <span className='text-success'>
                  {Math.round(
                    (data.discount / (data.cost + data.discount)) * 100
                  )}
                  % off
                </span>
              </div>

              <p
                className={
                  (data.availability ? 'text-success' : 'text-danger') + ' mt-1'
                }>
                {data.availability ? 'In Stock' : 'Out of Stock'}
              </p>

              <p>
                Delivery by :{' '}
                <span style={{ fontWeight: 'bold' }}>
                  {deliveryDate.toLocaleString('en-in', {
                    day: 'numeric',
                    month: 'short',
                  })}
                </span>
              </p>

              <div className='d-flex mt-3'>
                <button className='custom-btn w-50 mr-4'>Add to Cart</button>
                <button className='custom-btn-2 w-50'>Buy Now</button>
              </div>
            </Col>
          </Row>
        ) : null}
      </Container>
    );

    return (
      <React.Fragment>
        {!this.props.loading ? content : <CustomSpinner />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product.product_clicked,
  loading: state.product.loading,
});

export default connect(mapStateToProps, { getProduct })(Product);
