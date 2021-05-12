import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveItems, deleteItem, getItems } from '../actions/wishlistActions';
import NumberFormat from 'react-number-format';
import { setProduct } from '../actions/productActions';
import { addItem } from '../actions/cartActions';
import { toast } from 'react-toastify';

class WishList extends React.Component {
  static propTypes = {
    wishlist: PropTypes.object.isRequired,
    saveItems: PropTypes.func.isRequired,
    setProduct: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    user: PropTypes.func,
    getItems: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { wishlist } = this.props;
    this.props.saveItems(wishlist);
  }

  componentDidUpdate(prevProps) {
    const { wishlist, user } = this.props;
    if (user && prevProps.wishlist.items.length !== wishlist.items.length) {
      // this.props.getItems(user.email);
      this.props.saveItems(wishlist);
    }
  }

  handleClick = (product) => {
    this.props.setProduct(product);
  };

  delItem = (product) => {
    this.props.deleteItem({ email: this.props.user.email, item: product._id });
    toast.error(`${product.title} deleted from the wishlist`, {
      autoClose: 5000,
      position: toast.POSITION.TOP_CENTER,
      bodyClassName: 'error-toast',
    });
  };

  addToCart = (product) => {
    this.props.addItem({ ...product, qty: 1 });
    toast(`${product.title} added to cart`, {
      autoClose: 5000,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.wishlist.email ? ( // for some reason other things are not working
          <Container style={{ minHeight: '100vh' }}>
            <h1 className='text-center display-4 my-5'>WishList</h1>
            <Row>
              {this.props.wishlist.products.map((product) => (
                <Col xs='12'>
                  <hr />
                  <Row>
                    <Col md='3'>
                      <img
                        src={product.img[0]}
                        style={{ height: '100%', width: '80%' }}
                        alt={product.title}
                      />
                    </Col>
                    <Col md='6'>
                      <Link
                        to={`product/${product._id}`}
                        onClick={(event) => this.handleClick(product)}>
                        {' '}
                        <h4 style={{ color: 'black' }}>{product.title}</h4>
                      </Link>
                      <div className='d-flex flex-column'>
                        <span>By {product.brand}</span>
                        <span>
                          <i className='bi bi-star-fill text-warning mr-2' />
                          {product.rating}
                        </span>
                        <NumberFormat
                          value={product.cost}
                          displayType={'text'}
                          thousandSeparator={true}
                          thousandsGroupStyle={'lakh'}
                          prefix={'₹'}
                          renderText={(value) => (
                            <strong
                              className='mt-2'
                              style={{ fontSize: '1.5rem' }}>
                              {value}
                            </strong>
                          )}
                        />
                      </div>
                    </Col>
                    <Col md='3'>
                      <button
                        className='custom-btn-2 btn-block mt-5'
                        onClick={(event) => this.addToCart(product)}>
                        <i className='bi bi-handbag mr-2' />
                        Add to Cart
                      </button>
                      <button
                        className='custom-btn btn-block mt-3'
                        onClick={(event) => this.delItem(product)}>
                        <i className='bi bi-trash mr-2' />
                        Delete Item
                      </button>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </Container>
        ) : (
          <Redirect to='/login' />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  wishlist: state.wishlist,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  saveItems,
  setProduct,
  deleteItem,
  getItems,
  addItem,
})(WishList);
