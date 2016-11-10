/**
 * Created by Vitaliy on 08.11.2016.
 */

//noinspection JSUnresolvedVariable
import React, { PropTypes } from "react";
//noinspection JSUnresolvedVariable
import { FormattedMessage } from "react-intl";
//noinspection JSUnresolvedVariable
import { Link } from "react-router";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import { container, addButton } from "../../../styles/styles";


function UserList(props) {
  return (
    <div style={container}>
      <h2><FormattedMessage id="users"/></h2>
      {
        props.users.map(user => (
          <Link to={`/users/${user.cuid}`}
                key={user.cuid}>
            <span>{user.email}</span>
          </Link>
        ))
      }
      <Link to="/registration">
        <FloatingActionButton style={addButton}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  )
}

UserList.propTypes = {
  personAttributes: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
};

export default UserList;
