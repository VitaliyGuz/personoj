/**
 * Created by Vitaliy on 21.10.2016.
 */

//noinspection JSUnresolvedVariable
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Login from '../components/Login'

import { addUserRequest } from '../UserAction'

export class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addUser = () => {
    let user = { email: this.state.email, password: this.state.password };
    this.props.dispatch(addUserRequest(user))
  };

  render() {
    return (
      <Login email={this.state.email}
             password={this.state.password}
             onChange={this.onChange}
             addUser={this.addUser}>
      </Login>
    );
  }
}

RegistrationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(RegistrationPage);
