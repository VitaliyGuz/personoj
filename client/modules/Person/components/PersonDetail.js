/**
 * Created by Vitaliy on 31.10.2016.
 */

//noinspection JSUnresolvedVariable
import React, { PropTypes } from 'react';
//noinspection JSUnresolvedVariable
import { FormattedMessage } from 'react-intl'

import { container } from '../../../styles/styles'


import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


function PersonDetail(props) {

  const attributeNodes = Object.keys(props.person.published || {}).map((key) => {
    return (
      <span>{props.person.published[key]}</span>
    )
  })

  return (
    <div style={container}>
      <h2>
        <FormattedMessage id="personAttributeList"/>
      </h2>
      {attributeNodes}
    </div>
  )
}

PersonDetail.propTypes = {
  intl: PropTypes.object.isRequired
};

export default PersonDetail;
