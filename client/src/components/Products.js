import React from 'react';
import { Row, Col, Container, Input } from 'reactstrap';
import NumberFormat from 'react-number-format';
import TreeView from 'react-treeview';

class Products extends React.Component {
  state = {
    data: [],
    title: '',
    filterOptions: {},
  };

  componentDidMount() {
    this.setState({
      data: this.props.data,
      title: this.props.title,
      filterOptions: this.props.filterOptions,
    });
  }
  render() {
    const { data, title, filterOptions } = this.state;
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
                <option value='price'>Price</option>
                <option value='ratings'>Ratings</option>
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
                    itemClassName='text-capitalize mb-3'>
                    {filterOptions[key].map((child) => (
                      <div className='d-flex justify-content-between'>
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
                  <Col md='4' key={item.id} style={{ height: '40vh' }}>
                    <img
                      src={item.img}
                      alt=''
                      style={{ height: '75%', width: '100%' }}
                    />
                    <h4 className='text-wrap lead'>{item.title}</h4>
                    <NumberFormat
                      value={item.cost}
                      displayType={'text'}
                      thousandSeparator={true}
                      thousandsGroupStyle={'lakh'}
                      prefix={'₹'}
                      renderText={(value) => (
                        <strong className='mt-3' style={{ fontSize: '1.2rem' }}>
                          {value}
                        </strong>
                      )}
                    />
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

export default Products;
