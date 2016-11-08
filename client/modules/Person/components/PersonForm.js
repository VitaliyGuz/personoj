/**
 * Created by Admin on 30.10.2016.
 */

//noinspection JSUnresolvedVariable
import React, {PropTypes} from 'react';
//noinspection JSUnresolvedVariable
import {FormattedMessage} from 'react-intl'

// Import Style
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'

// Import Components

import {container} from '../../../styles/styles'

function PersonForm(props) {
  const attributeNodes = props.attributes.map(
    attribute => {
      switch (attribute.type) {
        case 'String': {
          return (
            <TextField key={attribute.name}
                       value={props.person[attribute.name] ? props.person[attribute.name] : null}
                       floatingLabelText={props.intl.labels[attribute.name]}
                       name={attribute.name}
                       onChange={props.onChangeTextField}/>
          )
        }
        case 'Number': {
          return (
          <TextField key={attribute.name}
                     value={props.person[attribute.name] ? props.person[attribute.name] : null}
                     floatingLabelText={props.intl.labels[attribute.name]}
                     name={attribute.name}
                     type="number"
                     onChange={props.onChangeNumberField}/>
          )
        }
        case 'Date': {
          return (
          <DatePicker key={attribute.name}
                      value={props.person[attribute.name] ? new Date(props.person[attribute.name]) : null}
                      floatingLabelText={props.intl.labels[attribute.name]}
                      name={attribute.name}
                      onChange={props.onChangeDatePicker.bind(null, attribute.name)}/>
          )
        }
        case 'Boolean': {
          return (
          <Checkbox key={attribute.name}
                    checked={props.person[attribute.name] ? props.person[attribute.name] : null}
                    label={props.intl.labels[attribute.name]}
                    name={attribute.name}
                    onCheck={props.onChangeCheckbox}/>
          )
        }
      }
    }
  )
  return (
    <div style={container}>
      <h2>
        <FormattedMessage id="person"/>
      </h2>
      {attributeNodes}
      <RaisedButton label={props.intl.messages.save}
                    primary={true}
                    onClick={props.savePerson}/>
    </div>
  )
}

PersonForm.propTypes = {
  intl: PropTypes.object.isRequired,
  attributes: PropTypes.object.isRequired,
};

export default PersonForm;
