/**
 * Created by Admin on 30.10.2016.
 */

//noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import PersonForm from "../components/PersonForm";
import {addPersonRequest, updatePersonRequest} from "../PersonActions";
import {getPerson} from '../PersonReducer';


export class PersonFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = props.person.published || {};
  }

  onChangeTextField = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  onChangeNumberField = (event) => {
    this.setState({[event.target.name]: parseInt(event.target.value)});
  };

  onChangeSelectField = (event, index, value) => {
    this.setState({[event.target.name]: value});
  };

  onChangeCheckbox = (event, isInputChecked) => {
    this.setState({[event.target.name]: isInputChecked});
  };

  onChangeDatePicker = (name, event, date) => {
    this.setState({[name]: date});
  };

  savePerson = () => {
    if (this.props.person.cuid) {
      this.props.dispatch(updatePersonRequest(this.props.person.cuid, this.state))
    } else {
      this.props.dispatch(addPersonRequest(this.state))
    }
  };

  render() {
    return (
      <div>
        <PersonForm intl={this.props.intl}
                    attributes={this.props.attributes}
                    person={this.state}
                    savePerson={this.savePerson}
                    onChangeTextField={this.onChangeTextField}
                    onChangeDatePicker={this.onChangeDatePicker}
                    onChangeCheckbox={this.onChangeCheckbox}
                    onChangeNumberField={this.onChangeNumberField}>
        </PersonForm>
      </div>
    );
  }
}

function mapStateToProps(store, props) {
  return {
    intl: store.intl,
    attributes: store.people.attributes,
    person: getPerson(store, props.params.cuid)
  };
}

export default connect(mapStateToProps)(PersonFormPage);
