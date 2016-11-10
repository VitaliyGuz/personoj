/**
 * Created by Vitaliy on 26.10.2016.
 */

//noinspection JSUnresolvedVariable
import React, { PropTypes } from "react";
//noinspection JSUnresolvedVariable
import { FormattedMessage } from "react-intl";
//noinspection JSUnresolvedVariable
import { Link } from "react-router";
import FloatingActionButton from "material-ui/FloatingActionButton";
import { Table, TableHeader, TableHeaderColumn, TableRow, TableBody, TableRowColumn } from "material-ui/Table";
import ContentAdd from "material-ui/svg-icons/content/add";
import ActionAssignmentTurnedIn from "material-ui/svg-icons/action/assignment-turned-in";
import IconButton from "material-ui/IconButton";
import { container, addButton } from '../../../styles/styles'


function PersonList(props) {
  let headers = props.people.reduce((prev, person) => {
    return { ...prev, ...Object.keys(person.published) }
  }, {});
  return (
    <div style={container}>
      <h2><FormattedMessage id="personList"/></h2>
      <Table>
        <TableHeader>
          <TableRow>
            {
              Object.keys(headers || {}).map((key) => {
                return (
                  <TableHeaderColumn key={key}>
                    {headers[key]}
                  </TableHeaderColumn>
                )
              })
            }
            <TableHeaderColumn>Approve</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            props.people.map(person => (
              <TableRow key={person.cuid}>
                {
                  Object.keys(headers).map(header => {
                    let key = headers[header];
                    return (
                      <TableRowColumn key={header}>
                        <Link to={`/people/${person.cuid}`}
                              key={person.cuid}>
                          {person.published[key] || ''}
                        </Link>
                      </TableRowColumn>
                    )
                  })
                }
                <TableRowColumn>
                  <IconButton onClick={props.approve.bind(null, person.cuid)}>
                    <ActionAssignmentTurnedIn></ActionAssignmentTurnedIn>
                  </IconButton>
                </TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <Link to="/people/new">
        <FloatingActionButton style={addButton}>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    </div>
  )
}

PersonList.propTypes = {
  intl: PropTypes.object.isRequired,
};

PersonList.defaultProps = {
  people: {}
};

export default PersonList;
