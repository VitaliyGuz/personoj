/**
 * Created by Vitaliy on 21.10.2016.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { signInRequest }from '../UserAction'

import Login from '../components/Login'

export class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signIn = () => {
    let user = { email: this.state.email, password: this.state.password };
    this.props.dispatch(signInRequest(user))
  };

  render() {
    return (
      <Login email={this.state.email}
             password={this.state.password}
             onChange={this.onChange}
             signIn={this.signIn}>
      </Login>
    )
  }
}

SignInPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(SignInPage);
