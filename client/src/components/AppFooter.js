import React from 'react';
import { Row, Col, Input } from 'reactstrap';

class AppFooter extends React.Component {
  render() {
    return (
      <div className='mt-5 container-fluid'>
        <hr />
        <Row className='p-5'>
          <Col md='3' className='pr-5'>
            <h3 className='text-uppercase'>About PCMart</h3>
            <p className='text-wrap mt-4'>
              PCMart is the leading online platform for every Work Professional,
              Student, Gamer or a PC enthusiast. Here one will find everything
              he/she needs to fulfil his/her digital needs.
            </p>
            <p className='mt-4'>
              <strong>Questions? </strong>
              <a href='/'>support@pcmart.com</a>
            </p>
          </Col>
          <Col md='3'>
            <h3 className='text-uppercase mb-4'>SHOP</h3>
            <p>Graphics Cards</p>
            <p>Memory Modules</p>
            <p>Computer Cases</p>
            <p>Power Supplies</p>
            <p>Processors</p>
            <p>Secondary Storage Devices</p>
          </Col>
          <Col md='3'>
            <h3 className='text-uppercase mb-4'>Information</h3>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Shipping & Returns</p>
            <p>Payment Methods</p>
          </Col>
          <Col md='3'>
            <h3 className='text-uppercase mb-4'>Newsletter</h3>
            <p>
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <Input
              type='email'
              placeholder='Enter your email address'
              className='form-group mt-5'
            />
            <button className='custom-btn btn-block mt-4'>Subscribe</button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppFooter;
