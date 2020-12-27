import React from 'react';
import Products from './Products';
import CustomSpinner from './CustomSpinner';
import { getAllProducts } from '../actions/productActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import lodash from 'lodash';

class PageGenerator extends React.Component {
  state = {
    filterOptions: {},
  };

  static propTypes = {
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool,
  };

  componentDidMount() {
    this.props.getAllProducts(this.props.match.params.product_type);
    // console.log(this.props.loading);
  }

  componentDidUpdate(prevprops) {
    // TODO: Optimise this section
    if (prevprops.products !== this.props.products) {
      const { products } = this.props;
      let keys = Object.keys(products[0].details);
      let options = {};

      keys.forEach((key) => {
        let unmangledKey = key.replace('_', ' ');
        options[unmangledKey] = lodash.sortBy(
          lodash.uniq(products.map((product) => product.details[key])),
          (x) => parseInt(x) || parseFloat(x) || x
        );
      });

      this.setState({ filterOptions: options });
    }
  }

  render() {
    const { products, loading } = this.props;
    return (
      <React.Fragment>
        {loading ? (
          <CustomSpinner />
        ) : (
          <Products
            data={products}
            filterOptions={this.state.filterOptions}
            title='Processors'
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
  loading: state.product.loading,
});

export default connect(mapStateToProps, { getAllProducts })(PageGenerator);
