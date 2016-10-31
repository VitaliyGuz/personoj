/**
 * Created by Vitaliy on 28.10.2016.
 */

import React, {PropTypes} from "react";
import {injectIntl, intlShape, FormattedMessage} from "react-intl";
import {Link} from "react-router";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

// Import Style

// Import Components

const styles = {
  container: {
    padding: '1.5em',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
  },
  addButton: {
    position: 'fixed',
    bottom: '1em',
    right: '1em'
  }
}

function PersonAttributeList(props) {
  return (
    <div style={styles.container}>
      <h2><FormattedMessage id="personAttributeList"/></h2>
      {
        props.personAttributes.map(personAttribute => (
          <Link to={`/person-attributes/${personAttribute.cuid}`}
                key={personAttribute.cuid}>
            <span>{personAttribute.cuid}</span>
          </Link>
        ))
      }
      <Link to="/person-attributes/new">
        <FloatingActionButton style={styles.addButton}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  )
}

PersonAttributeList.propTypes = {
  personAttributes: {},
  intl: intlShape.isRequired,
};

export default injectIntl(PersonAttributeList);
