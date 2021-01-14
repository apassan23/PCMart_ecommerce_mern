import React from 'react';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/authActions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  static propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = (event) => {
    const { email, password } = this.state;
    event.preventDefault();
    this.props.login({ email, password });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.isAuthenticated ? (
          <Redirect to='/' />
        ) : (
          <Container
            style={{ height: '100vh' }}
            className='d-flex flex-row justify-content-center'>
            <div className='w-100'>
              <h1 className='text-center mb-5' style={{ marginTop: '15rem' }}>
                Login to your Account
              </h1>
              <div className='w-100 d-flex justify-content-center'>
                <Form style={{ width: '40%' }}>
                  <FormGroup className='mt-5'>
                    <Label for='email' className='form-label'>
                      Email
                    </Label>
                    <Input
                      type='email'
                      placeholder='Email'
                      name='email'
                      onChange={(event) => this.handleChange(event)}
                    />
                  </FormGroup>

                  <FormGroup className='mt-4'>
                    <Label for='password' className='form-label' id='label-pwd'>
                      Password
                    </Label>
                    <Input
                      type='password'
                      placeholder='Password'
                      name='password'
                      onChange={(event) => this.handleChange(event)}
                    />
                  </FormGroup>

                  <div className='d-flex justify-content-between mt-2'>
                    {' '}
                    <FormGroup>
                      <input type='checkbox' className='mr-2' defaultChecked />
                      Remember Me
                    </FormGroup>
                    <Link>Forgot Password?</Link>
                  </div>

                  <div className='mt-5 w-100 d-flex'>
                    <button
                      className='login-btn mr-4 w-50'
                      type='submit'
                      onClick={(event) => this.handleClick(event)}
                      disabled={
                        !this.state.email || !this.state.password ? true : false
                      }>
                      Login
                    </button>
                    <button className='signup-btn w-50'>Signup</button>
                  </div>
                </Form>
              </div>
            </div>
          </Container>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, { login })(Login);
