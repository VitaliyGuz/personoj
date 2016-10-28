/**
 * Created by Vitaliy on 26.10.2016.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {getPerson} from '../PersonReducer'

export class PersonDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <span>{this.props.person.cuid}</span>
      </div>
    );
  }
}

PersonDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state, props) {
  return {
    person: getPerson(state, props.params.cuid),
  };
}

export default connect(mapStateToProps)(PersonDetailPage);
