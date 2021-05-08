import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  FormFeedback,
} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { validateEmail, comparePwd, chainOR } from '../util';
import { register } from '../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REGISTER_FAIL } from '../actions/types';
import { clearErrors } from '../actions/errorActions';

class SignUp extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    errorMsg: null,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { email, password, username } = this.state;
    this.props.register({ email, username, password });
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    register: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (prevProps.error !== error && error.id === REGISTER_FAIL)
      this.setState({ errorMsg: error.msg });

    if (isAuthenticated) {
      this.props.clearErrors();
      this.setState({ errorMsg: null });
    }
  }

  render() {
    const { email, username, password, confirmPassword, errorMsg } = this.state;
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
                Create a New Account
              </h1>
              <div className='w-100 d-flex justify-content-center'>
                <Form style={{ width: '40%' }}>
                  <FormGroup className='mt-5'>
                    <Label for='username' className='form-label'>
                      Username
                    </Label>
                    <Input
                      type='text'
                      placeholder='Username'
                      name='username'
                      onChange={(event) => this.handleChange(event)}
                    />
                  </FormGroup>

                  <FormGroup className='mt-4'>
                    <Label for='email' className='form-label'>
                      Email
                    </Label>
                    <Input
                      type='email'
                      placeholder='Email'
                      name='email'
                      onChange={(event) => this.handleChange(event)}
                      valid={validateEmail(email)}
                      invalid={email && !validateEmail(email)}
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

                  <FormGroup className='mt-4'>
                    <Label
                      for='confirmPassword'
                      className='form-label'
                      id='label-pwd'>
                      Confirm Password
                    </Label>
                    <Input
                      type='password'
                      placeholder='Confirm Password'
                      name='confirmPassword'
                      onChange={(event) => this.handleChange(event)}
                      invalid={password !== confirmPassword}
                      valid={password && comparePwd(password, confirmPassword)}
                    />
                    <FormFeedback valid>Passwords Match!</FormFeedback>
                    <FormFeedback invalid>Passwords do not match!</FormFeedback>
                  </FormGroup>

                  <div className='d-flex justify-content-between mt-2'>
                    {' '}
                    <FormGroup>
                      <input type='checkbox' className='mr-2' defaultChecked />
                      Subscribe to the Newsletter!
                    </FormGroup>
                  </div>

                  {errorMsg ? (
                    <Alert color='danger'>
                      <i class='bi bi-patch-exclamation-fill mr-3' />
                      {errorMsg}
                    </Alert>
                  ) : null}

                  <div className='mt-5'>
                    <button
                      className='login-btn mr-4 btn-block'
                      type='submit'
                      onClick={(event) => this.handleClick(event)}
                      disabled={chainOR(
                        !email,
                        !password,
                        !username,
                        !confirmPassword,
                        !comparePwd(password, confirmPassword),
                        !validateEmail(email)
                      )}>
                      Signup
                    </button>
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
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(SignUp);
