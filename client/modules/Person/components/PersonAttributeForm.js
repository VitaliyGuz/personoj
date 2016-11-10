/**
 * Created by Vitaliy on 28.10.2016.
 */

//noinspection JSUnresolvedVariable
import React, { PropTypes } from "react";
//noinspection JSUnresolvedVariable
import { FormattedMessage } from "react-intl";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import RaisedButton from "material-ui/RaisedButton";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";
import Subheader from "material-ui/Subheader";
import { container } from "../../../styles/styles";



function PersonAttributeForm(props) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <TextField key={lang} name={lang} hintText={lang} onChange={props.onLabelChange}/>
  );
  return (
    <div style={container}>
      <h2>
        <FormattedMessage id="personAttributeList"/>
      </h2>
      <TextField hintText={props.intl.messages.name}
                 value={props.name}
                 name="name"
                 onChange={props.onChangeTextField}/>
      <SelectField hintText={props.intl.messages.type}
                   name="type"
                   value={props.type}
                   onChange={props.onChangeSelectField.bind(null, "type")}>
        <MenuItem value={'String'} primaryText={props.intl.messages.string}/>
        <MenuItem value={'Number'} primaryText={props.intl.messages.number}/>
        <MenuItem value={'Date'} primaryText={props.intl.messages.date}/>
        <MenuItem value={'Boolean'} primaryText={props.intl.messages.boolean}/>
      </SelectField>
      <TextField hintText={props.intl.messages.values}
                 multiLine={true}
                 rows={1}
                 rowsMax={5}
                 name="values"
                 onChange={props.onChangeMultiLineTextField}/>
      <Subheader><FormattedMessage id="localizationLabel"/></Subheader>
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
