/**
 * Created by Vitaliy on 26.10.2016.
 */

import React, {PropTypes} from "react";
import {injectIntl, intlShape, FormattedMessage} from "react-intl";

// Import Style
import {Link} from "react-router";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import ActionAssignmentTurnedIn from "material-ui/svg-icons/action/assignment-turned-in";
import IconButton from 'material-ui/IconButton';
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
          <div>
            <Link to={`/people/${person.cuid}`}
                  key={person.cuid}>
              <span>{person.cuid}</span>
            </Link>
            <IconButton onClick={props.approve.bind(null, person.cuid)}>
              <ActionAssignmentTurnedIn></ActionAssignmentTurnedIn>
            </IconButton>
          </div>
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

PersonList.defaultProps = {
  people: {}
};

export default injectIntl(PersonList);
