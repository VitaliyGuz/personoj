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
    props.dispatch(fetchPersonAttributes());
  }

  render() {
    return (
      <PersonAttributeList personAttributes={this.props.personAttributes} intl={this.props.intl}/>
    );
  }
}

PersonAttributeListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

PersonAttributeListPage.need = [() => {
  return fetchPersonAttributes();
}];

function mapStateToProps(store, props) {
  return {
    intl: store.intl,
    personAttributes: getPersonAttributes(store),
  };
}

export default connect(mapStateToProps)(PersonAttributeListPage);


