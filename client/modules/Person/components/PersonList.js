/**
 * Created by Vitaliy on 26.10.2016.
 */

import React, {PropTypes} from "react";
import {injectIntl, intlShape, FormattedMessage} from "react-intl";

// Import Style
import {Link} from "react-router";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
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

function PersonList(props) {
  return (
    <div style={styles.container}>
      <h2><FormattedMessage id="personList"/></h2>
      {
        props.people.map(person => (
          <Link to={`/people/${person.cuid}`}
                key={person.cuid}>
            <span>{person.cuid}</span>
          </Link>
        ))
      }

      <Link to="/people/new">
        <FloatingActionButton style={styles.addButton}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  )
}

PersonList.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(PersonList);
