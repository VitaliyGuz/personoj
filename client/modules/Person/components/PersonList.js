/**
 * Created by Vitaliy on 26.10.2016.
 */

import React, {PropTypes} from 'react';
import {injectIntl, intlShape, FormattedMessage} from 'react-intl'

// Import Style
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

// Import Components

const styles = {
  container: {
    padding: '1.5em',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
  }
}

function PersonList(props) {
  return (
    <div style={styles.container}>
      <h2><FormattedMessage id="personList"/></h2>
      {
        props.people.map(person => (
          <span>{person.cuid}</span>
        ))
      }
    </div>
  )
}

PersonList.propTypes = {
  people: {},
  intl: intlShape.isRequired,
};

export default injectIntl(PersonList);
