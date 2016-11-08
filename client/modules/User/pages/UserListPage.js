/**
 * Created by Vitaliy on 08.11.2016.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {getUsers} from '../UserReducer'
import {fetchUsers} from '../UserAction'

import UserList from '../components/UserList'

export class UserListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    props.dispatch(fetchUsers());
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  signIn = () => {
    let user = {email: this.state.email, password: this.state.password};
    //this.props.dispatch(signInRequest(user))
  };

  render() {
    return (
      <UserList users={this.props.users}>
      </UserList>
    )
  }
}

UserListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
    users: getUsers(state) || {}  ,
  };
}

export default connect(mapStateToProps)(UserListPage);
