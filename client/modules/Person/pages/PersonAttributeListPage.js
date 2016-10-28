/**
 * Created by Vitaliy on 28.10.2016.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {getPersonAttributes} from '../PersonReducer'
import {fetchPersonAttributes} from '../PersonActions';

import PersonAttributeList from '../components/PersonAttributeList'

export class PersonAttributeListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <PersonAttributeList personAttributes={this.props.personAttributes}></PersonAttributeList>
    );
  }
}

PersonAttributeListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
    personAttributes: getPersonAttributes(state),
  };
}

export default connect(mapStateToProps)(PersonAttributeListPage);


