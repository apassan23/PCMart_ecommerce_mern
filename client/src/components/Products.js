import React from 'react';
import { Row, Col, Container, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import TreeView from 'react-treeview';
import { connect } from 'react-redux';
import { setProduct, sortProducts } from '../actions/productActions';

class Products extends React.Component {
  handleClick = (product) => {
    this.props.setProduct(product);
  };

  render() {
    const { data, title, filterOptions } = this.props;
    // console.log(data);
    return (
      <div>
        {title ? (
          <div
            className='w-100 container-fluid d-flex align-items-center justify-content-between'
            style={{
              height: '7vh',
              boxShadow: '0 0 8px 1px rgba(0,0,0,0.2)',
              border: '1.5px solid rgba(0,0,0,0.1)',
            }}>
            <h4 className=''>{title}</h4>
            <div className='d-flex align-items-center'>
              <h4 className='text-nowrap'>Sort By</h4>
              <select name='' id='' className='form-control ml-3 h-75'>
                <option value=''>No Filter</option>
                <option
                  value='price'
                  onClick={(event) => this.props.sortProducts('cost')}>
                  Price
                </option>
                <option
                  value='ratings'
                  onClick={(event) => this.props.sortProducts('rating')}>
                  Ratings
                </option>
              </select>
            </div>
          </div>
        ) : null}
        <Container style={{ minHeight: '100vh' }} className=''>
          <Row>
            <Col md='3'>
              <div className='text-uppercase mt-5 w-100 d-flex justify-content-between'>
                <p>Filters</p>
                <p className='text-warning'>Reset</p>
              </div>
              <hr />
              <div className='mt-4'>
                {Object.keys(filterOptions).map((key) => (
                  <TreeView
                    nodeLabel={key}
                    defaultCollapsed
                    itemClassName='text-capitalize mb-3'
                    key={key}>
                    {filterOptions[key].map((child) => (
                      <div
                        className='d-flex justify-content-between'
                        key={child}>
                        <label
                          htmlFor={child}
                          className='text-capitalize text-muted'>
                          {child}
                        </label>
                        <Input type='checkbox' className='' name={child} />
                      </div>
                    ))}
                  </TreeView>
                ))}
              </div>
            </Col>
            <Col md='9'>
              <Row className='mt-4'>
                {data.map((item) => (
                  <Col md='4' key={item.id} style={{ minHeight: '40vh' }}>
                    <Link
                      className='product-link'
                      to={`/product/${item._id}`}
                      onClick={(event) => this.handleClick(item)}>
                      <img
                        src={item.img[0]}
                        alt=''
                        style={{ height: '75%', width: '100%' }}
                        id='product-img'
                      />
                      <h4 className='text-wrap lead'>{item.title}</h4>
                      <NumberFormat
                        value={item.cost}
                        displayType={'text'}
                        thousandSeparator={true}
                        thousandsGroupStyle={'lakh'}
                        prefix={'₹'}
                        renderText={(value) => (
                          <strong
                            className='mt-3'
                            style={{ fontSize: '1.2rem' }}>
                            {value}
                          </strong>
                        )}
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(null, { setProduct, sortProducts })(Products);
