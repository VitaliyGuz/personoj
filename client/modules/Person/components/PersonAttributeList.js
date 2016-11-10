/**
 * Created by Vitaliy on 28.10.2016.
 */

//noinspection JSUnresolvedVariable
import React, { PropTypes } from "react";
//noinspection JSUnresolvedVariable
import { FormattedMessage } from "react-intl";
//noinspection JSUnresolvedVariable
import { Link } from "react-router";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import { container, addButton } from '../../../styles/styles';


function PersonAttributeList(props) {
  return (
    <div style={container}>
      <h2><FormattedMessage id="personAttributeList"/></h2>
      {
        props.personAttributes.map(personAttribute => (
          <Link to={`/person-attributes/${personAttribute.cuid}`}
                key={personAttribute.cuid}>
            <span>{personAttribute.localizationLabel[props.intl.locale]}</span>
          </Link>
        ))
      }
      <Link to="/person-attributes/new">
        <FloatingActionButton style={addButton}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  )
}

PersonAttributeList.propTypes = {
  personAttributes: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
};

export default PersonAttributeList;
