/**
 * Created by Vitaliy on 04.11.2016.
 */

import React, {PropTypes} from 'react';

// Import Actions
function PersonWrapper(props) {
  return props.children;
}
// Actions required to provide data for this component to render in sever side.

PersonWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props

export default PersonWrapper;
