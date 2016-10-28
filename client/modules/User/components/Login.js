/**
 * Created by Vitaliy on 26.10.2016.
 */


import React, {PropTypes} from 'react';
import {injectIntl, intlShape, FormattedMessage} from 'react-intl'

// Import Style
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

// Import Components

const styles = {
  container: {
    padding: '1.5em',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
  }
}

function Login(props) {
  return (
    <div style={styles.container}>
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
