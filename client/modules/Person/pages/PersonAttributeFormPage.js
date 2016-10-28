/**
 * Created by Vitaliy on 28.10.2016.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import PersonAttributeForm from '../components/PersonAttributeForm'


export class PersonAttributeFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onChangeTextField = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  onChangeSelectField = (event, index, value) => {
    this.setState({[event.target.name]: value});
  };

  onChangeCheckbox = (event, isInputChecked) => {
    this.setState({[event.target.name]: isInputChecked});
  };

  render() {
    return (
      <div>
        <PersonAttributeForm intl={this.props.intl}
                             name={this.state.name}
                             type={this.state.type}
                             values={this.state.values}
                             allowArbitraryValues={this.state.allowArbitraryValues}
                             needApproval={this.state.needApproval}
                             onChangeTextField={this.onChangeTextField}
                             onChangeSelectField={this.onChangeSelectField}
                             onChangeCheckbox={this.onChangeCheckbox}>

        </PersonAttributeForm>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(PersonAttributeFormPage);
