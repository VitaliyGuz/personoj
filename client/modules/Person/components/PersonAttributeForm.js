/**
 * Created by Vitaliy on 28.10.2016.
 */

//noinspection JSUnresolvedVariable
import React, {PropTypes} from 'react';
//noinspection JSUnresolvedVariable
import {FormattedMessage} from 'react-intl'

// Import Style
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'

// Import Components

const styles = {
  container: {
    padding: '1.5em',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
  }
}

let selectValue = null;

const handleChange = (event, index, value) => {
  selectValue = value
}

function PersonAttributeForm(props) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <TextField key={lang} hintText={lang}/>
  )
  return (
    <div style={styles.container}>
      <h2>
        <FormattedMessage id="personAttributeList"/>
      </h2>
      <TextField hintText={props.intl.messages.name}
                 value={props.name}
                 name="name"
                 onChange={props.onChangeTextField}/>
      <TextField hintText={props.intl.messages.type}
                 value={props.type}
                 name="type"
                 onChange={props.onChangeTextField}/>
      {/*<SelectField
        floatingLabelText="Ready?"
        value={selectValue}
        onChange={handleChange}
      >
        <MenuItem value={null} primaryText=""/>
        <MenuItem value={false} primaryText="No"/>
        <MenuItem value={true} primaryText="Yes"/>
      </SelectField>
      <SelectField floatingLabelText={props.intl.messages.type}
                   name="type"
                   value={props.type}
                   onChange={props.onChangeSelectField}>
        <MenuItem value={null} primaryText=""/>
        <MenuItem value={'String'} primaryText="String"/>
        <MenuItem value={'Number'} primaryText="Number"/>
        <MenuItem value={'Date'} primaryText="Date"/>
        <MenuItem value={'Boolean'} primaryText="Boolean"/>
      </SelectField>*/}
      <TextField hintText={props.intl.messages.values}
                 value={props.values}
                 multiLine={true}
                 rows={2}
                 rowsMax={5}
                 name="values"
                 onChange={props.onChangeTextField}/>
      <FormattedMessage id="localizationLabel"/>
      {languageNodes}
      <Checkbox label={props.intl.messages.allowArbitraryValues}
                name="allowArbitraryValues"
                onCheck={props.onChangeCheckbox}/>
      <Checkbox label={props.intl.messages.needApproval}
                name="needApproval"
                onCheck={props.onChangeCheckbox}/>
      <RaisedButton label={props.intl.messages.save}
                    primary={true}
                    onClick={props.addPersonAttribute}/>
    </div>
  )
}

PersonAttributeForm.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default PersonAttributeForm;
