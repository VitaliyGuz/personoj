/**
 * Created by Vitaliy on 28.10.2016.
 */

//noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import PersonAttributeForm from '../components/PersonAttributeForm'

import {addPersonAttributeRequest} from '../PersonActions'


export class PersonAttributeFormPage extends Component {
  constructor(props) {
    super(props);
    let languages = props.intl.enabledLanguages.reduce(function(object, language) {
      object[language] = '';
      return object
    }, {});
    this.state = {
      name:'',
      type: '',
      values: [],
      localizationLabel: languages,
      allowArbitraryValues: false
    }
  }

  onChangeTextField = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  onChangeMultiLineTextField = (event) => {
    this.setState({[event.target.name]: event.target.value.split('\n')});
  };

  onChangeSelectField = (name, event, index, value) => {
    this.setState({[name]: value});
  };

  onChangeCheckbox = (event, isInputChecked) => {
    this.setState({[event.target.name]: isInputChecked});
  };

  onLabelChange = (event) => {
    let localizationLabel = Object.assign(this.state.localizationLabel, {[event.target.name]: event.target.value});
    this.setState({'localizationLabel': localizationLabel});
  };

  addPersonAttribute = () => {
    let personAttribute = {
      name: this.state.name,
      type: this.state.type,
      values: this.state.values,
      localizationLabel: this.state.localizationLabel,
      allowArbitraryValues: this.state.allowArbitraryValues,
      needApproval: this.state.needApproval
    };
    this.props.dispatch(addPersonAttributeRequest(personAttribute))
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
                             onChangeCheckbox={this.onChangeCheckbox}
                             onLabelChange={this.onLabelChange}
                             addPersonAttribute={this.addPersonAttribute}
                             onChangeMultiLineTextField={this.onChangeMultiLineTextField}>
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
