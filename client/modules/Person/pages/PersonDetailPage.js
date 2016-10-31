/**
 * Created by Vitaliy on 26.10.2016.
 */

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {getPerson} from '../PersonReducer'

import PersonDetail from '../components/PersonDetail'


export class PersonDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <PersonDetail intl={this.props.intl}
                      person={this.props.person}>
        </PersonDetail>
      </div>
    );
  }
}

PersonDetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store, props) {
  return {
    intl: store.intl,
    person: getPerson(store, props.params.cuid),
  };
}

export default connect(mapStateToProps)(PersonDetailPage);
