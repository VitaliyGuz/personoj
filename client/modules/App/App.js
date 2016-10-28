import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// Import Style

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';

// Import Actions
import {switchLanguage} from '../../modules/Intl/IntlActions';
import {fetchPeople} from '../Person/PersonActions';
import {fetchPersonAttributes} from '../Person/PersonActions';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    maxWidth: 980,
    textAlign: 'center',
    paddingTop: 100,
    margin: '0 auto'
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  }
});

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isMounted: false};
  }

  componentDidMount() {
    this.props.dispatch(fetchPeople);
    this.props.dispatch(fetchPersonAttributes);
    this.setState({isMounted: true}); // eslint-disable-line
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.main}>
          {/*{this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}*/}
          <Helmet
            title="MERN Starter - Blog App"
            titleTemplate="%s - Blog App"
            meta={[
              {charset: 'utf-8'},
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <AppBar title="MERN Starter - Blog App"/>
          <Link to="/person-attributes/new">New attribute</Link>


          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl,
  };
}

export default connect(mapStateToProps)(App);
