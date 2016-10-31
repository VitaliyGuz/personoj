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
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

// Import Components

const styles = {
  container: {
    padding: '1.5em',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
  }
};



function PersonForm(props) {
  const attributeNodes = props.attributes.map(
    attribute =>
      <TextField key={attribute.name}
                 hintText={attribute.name}
                 name={attribute.name}
                 onChange={props.onChangeTextField}/>
  )
  return (
    <div style={styles.container}>
      <h2>
        <FormattedMessage id="personAttributeList"/>
      </h2>
      {attributeNodes}
      <RaisedButton label={props.intl.messages.save}
                    primary={true}
                    onClick={props.addPerson}/>
    </div>
  )
}

PersonForm.propTypes = {
  intl: PropTypes.object.isRequired,
  attributes: PropTypes.object.isRequired,
};

export default PersonForm;
