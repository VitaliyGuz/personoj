/**
 * Created by Vitaliy on 28.10.2016.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {getPersonAttribute} from '../PersonReducer'

export class PersonAttributeDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <span>{this.props.personAttribute.cuid}</span>
      </div>
    );
  }
}

PersonAttributeDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
    personAttribute: getPersonAttribute(state, props.params.cuid),
  };
}

export default connect(mapStateToProps)(PersonAttributeDetailPage);
