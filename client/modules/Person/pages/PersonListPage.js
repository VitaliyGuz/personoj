/**
 * Created by Vitaliy on 25.10.2016.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {getPeople} from '../PersonReducer'

import {fetchPeople, fetchPersonAttributes, confirmPersonChangesRequest} from "../PersonActions";

import PersonList from '../components/PersonList'

export class PersonListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    props.dispatch(fetchPeople());
    props.dispatch(fetchPersonAttributes());
  }

  approve = (quid) => {
    this.props.dispatch(confirmPersonChangesRequest(quid))
  };

  render() {
    return (
      <PersonList people={this.props.people} approve={this.approve}></PersonList>
    );
  }
}

PersonListPage.need = [() => {
  return fetchPeople();
}, () => {
  return fetchPersonAttributes();
}];

PersonListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

PersonListPage.defaultProps = {
  people: {}
};

function mapStateToProps(state, props) {
  return {
    people: getPeople(state) || {}  ,
  };
}

export default connect(mapStateToProps)(PersonListPage);

