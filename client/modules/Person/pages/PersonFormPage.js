/**
 * Created by Admin on 30.10.2016.
 */

//noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import PersonForm from "../components/PersonForm";
import {addPersonRequest} from "../PersonActions";


export class PersonFormPage extends Component {
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

  addPerson = () => {
    this.props.dispatch(addPersonRequest(this.state))
  };

  render() {
    return (
      <div>
        <PersonForm intl={this.props.intl}
                    attributes={this.props.attributes}
                    addPerson={this.addPerson}
                    onChangeTextField={this.onChangeTextField}>
        </PersonForm>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    intl: store.intl,
    attributes: store.people.attributes
  };
}

export default connect(mapStateToProps)(PersonFormPage);
