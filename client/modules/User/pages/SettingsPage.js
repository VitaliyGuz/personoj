/**
 * Created by Admin on 08.11.2016.
 */


import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import { updateUserRequest } from "./../UserAction"

export class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  save = () => {
    let user = { personFilter: this.state.personFilter };
    this.props.dispatch(updateUserRequest(user))
  };

  render() {
    return (
      <div>
        <TextField hintText="Фильтр физ лиц"
                   value={this.state.personFilter}
                   onChange={this.onChange}
                   name="personFilter"/>
        <RaisedButton label="Сохранить"
                      primary={true}
                      onClick={this.save}/>
      </div>
    )
  }
}

SettingsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(SettingsPage);
