/**
 * Created by Vitaliy on 28.10.2016.
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

function PersonAttributeList(props) {
  return (
    <div style={styles.container}>
      <h2><FormattedMessage id="personAttributeList"/></h2>
      {
        props.personAttributes.map(personAttribute => (
          <span>{personAttribute.cuid}</span>
        ))
      }
    </div>
  )
}

PersonAttributeList.propTypes = {
  personAttributes: {},
  intl: intlShape.isRequired,
};

export default injectIntl(PersonAttributeList);
