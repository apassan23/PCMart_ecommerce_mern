import React from 'react';
import { Spinner } from 'reactstrap';

export default class CustomSpinner extends React.Component {
  render() {
    return (
      <div
        className='w-100 d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}>
        <Spinner style={{ height: '3rem', width: '3rem' }} />
      </div>
    );
  }
}
