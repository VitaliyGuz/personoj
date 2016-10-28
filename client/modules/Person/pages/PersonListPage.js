/**
 * Created by Vitaliy on 25.10.2016.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {getPeople} from '../PersonReducer'

import PersonList from '../components/PersonList'

export class PersonListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <PersonList people={this.props.people}></PersonList>
    );
  }
}

PersonListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
    people: getPeople(state),
  };
}

export default connect(mapStateToProps)(PersonListPage);

