/**
 * Created by Vitaliy on 26.10.2016.
 */


//noinspection JSUnresolvedVariable
import React, { PropTypes } from 'react';
//noinspection JSUnresolvedVariable
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { container } from '../../../styles/styles'


function Login(props) {
  return (
    <div style={container}>
      {props.addUser ? <h2><FormattedMessage id="registrationForm"/></h2> : null}
      {props.signIn ? <h2><FormattedMessage id="loginForm"/></h2> : null}
      <TextField hintText={props.intl.messages.userLogin}
                 value={props.email}
                 onChange={props.onChange}
                 name="email"/>
      <TextField hintText={props.intl.messages.userPassword}
                 value={props.password}
                 onChange={props.onChange}
                 name="password"
                 type="password"/>
      {props.addUser ?
        <RaisedButton label={props.intl.messages.registration}
                      primary={true}
                      onClick={props.addUser}/> : null}
      {props.signIn ?
        <RaisedButton label={props.intl.messages.enter}
                      primary={true}
                      onClick={props.signIn}/> : null}
    </div>
  )
}

Login.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Login);
