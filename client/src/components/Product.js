import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomSpinner from './CustomSpinner';
import { getProduct } from '../actions/productActions';
import { addItem } from '../actions/cartActions';
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
    getProduct: PropsTypes.func.isRequired,
    addItem: PropsTypes.func.isRequired,
  };

  componentDidMount() {
    const { product } = this.props;
    if (product && Object.keys(product).length !== 0) {
      const { details } = this.props.product;
      this.props.product.details = this.unmangleData(details);
      this.setState({ data: product });
    } else this.props.getProduct(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      const { details } = this.props.product;
      this.props.product.details = this.unmangleData(details);

      this.setState({ data: this.props.product });
    }
  }

  unmangleData = (details) => {
    Object.keys(details).forEach((key) => {
      let unmangledkey = key.replace('_', ' ');
      details[unmangledkey] = details[key];
      if (unmangledkey !== key) delete details[key];
    });

    return details;
  };

  addToCart = (event, product) => {
    this.props.addItem({ ...product, qty: 1 });
  };

  render() {
    const { data } = this.state;
    const starStyle = {
      fontSize: '1rem',
      color: '#ffa500',
    };
    let deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 2);
    let content = (
      <Container style={{ height: '100vh' }} className=''>
        {Object.keys(data).length !== 0 ? (
          <React.Fragment>
            <h4 className='mt-5 text-capitalize'>
              <Link
                to={`/components/${data.product_type}`}
                className='text-muted'>
                {data.product_type.replace('_', ' ')}
              </Link>
              {` > ${data.title}`}
            </h4>
            <Row className='my-5'>
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
                  <i className='bi bi-star-fill mr-2' style={starStyle} />
                  <big>{data.rating}</big>
                </p>

                <NumberFormat
                  value={data.cost + data.discount}
                  displayType={'text'}
                  thousandSeparator={true}
                  thousandsGroupStyle={'lakh'}
                  prefix={'₹'}
                  renderText={(value) => (
                    <big>
                      M.R.P.
                      <span
                        className='text-muted ml-2'
                        style={{
                          textDecoration: 'line-through',
                        }}>
                        {value}
                      </span>
                    </big>
                  )}
                />

                <NumberFormat
                  value={data.cost}
                  displayType={'text'}
                  thousandSeparator={true}
                  thousandsGroupStyle={'lakh'}
                  prefix={'₹'}
                  renderText={(value) => <h2 className='mt-3'>{value}</h2>}
                />

                <NumberFormat
                  value={data.discount}
                  displayType={'text'}
                  thousandSeparator={true}
                  thousandsGroupStyle={'lakh'}
                  prefix={'₹'}
                  renderText={(value) => (
                    <big>
                      You Save :{' '}
                      <span className='text-success'>{`${value} (${Math.round(
                        (data.discount / (data.cost + data.discount)) * 100
                      )}%)`}</span>
                    </big>
                  )}
                />
                <p
                  className={
                    (data.availability ? 'text-success' : 'text-danger') +
                    ' mt-1'
                  }>
                  {data.availability ? 'In Stock' : 'Out of Stock'}
                </p>

                <p>
                  <span
                    className='text-uppercase'
                    style={{ fontWeight: 'bold' }}>
                    Free
                  </span>{' '}
                  Delivery
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

                <div className='d-flex mt-5'>
                  <button
                    className='custom-btn w-50 mr-4'
                    onClick={(event) => this.addToCart(event, data)}>
                    Add to Cart
                  </button>
                  <button className='custom-btn-2 w-50'>Buy Now</button>
                </div>
              </Col>
            </Row>
            <hr />
            <h2 className='text-center mt-5'>Product Specifications</h2>

            <Row className='mt-5'>
              {Object.keys(data.details).map((key) => (
                <Col
                  md='12'
                  xs='12'
                  className='mt-3 d-flex justify-content-center'>
                  <big className='d-flex justify-content-between w-75'>
                    <span
                      className='text-capitalize'
                      style={{ fontWeight: 'bold' }}>
                      {key}
                    </span>
                    <span className=''>{data.details[key]}</span>
                  </big>
                </Col>
              ))}
            </Row>
          </React.Fragment>
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

export default connect(mapStateToProps, { getProduct, addItem })(Product);
