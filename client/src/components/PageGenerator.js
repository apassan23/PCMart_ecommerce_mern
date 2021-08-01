import React from 'react';
import Products from './Products';
import CustomSpinner from './CustomSpinner';
import { getAllProducts } from '../actions/productActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PageGenerator extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    filters: PropTypes.object,
    getAllProducts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // if condition to reduce unnecessary re renders
    if (this.props.products.length === 0)
      this.props.getAllProducts(this.props.match.params.product_type);
    // console.log(this.props.loading);
  }

  render() {
    const { products, loading, filters } = this.props;
    return (
      <React.Fragment>
        {loading ? (
          <CustomSpinner />
        ) : (
          <Products
            data={products}
            filterOptions={filters}
            title={this.props.match.params.product_type
              .replace('_', ' ')
              .toUpperCase()}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
  filters: state.product.filters,
});

export default connect(mapStateToProps, { getAllProducts })(PageGenerator);
