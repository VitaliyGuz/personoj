import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {deepOrange500} from "material-ui/styles/colors";
import AppBar from "material-ui/AppBar";
//noinspection JSUnresolvedVariable
import {Link} from "react-router";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Helmet from "react-helmet";
import DevTools from "./components/DevTools";
import {fetchPeople, fetchPersonAttributes} from "../Person/PersonActions";
import {fetchLocalizationLabels} from "../Intl/IntlActions";

// Import Style

// Import Components

// Import Actions

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    maxWidth: 980,
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
    this.props.dispatch(fetchPeople());
    this.props.dispatch(fetchPersonAttributes());
    //noinspection JSUnresolvedVariable
    this.props.dispatch(fetchLocalizationLabels(this.props.intl.locale));
    this.setState({isMounted: true}); // eslint-disable-line
    this.setState({open: false}); // eslint-disable-line
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    //noinspection JSUnresolvedVariable
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.main}>
          {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
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
          <AppBar title="MERN Starter - Blog App"
                  onLeftIconButtonTouchTap={this.handleToggle}/>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <Link to="/people"><MenuItem primaryText="People" onTouchTap={this.handleClose}/></Link>
            <Link to="/person-attributes"><MenuItem primaryText="Attributes" onTouchTap={this.handleClose}/></Link>
          </Drawer>

          {/*<Tabs value={pathname}>
            <Tab label="Home" value="/" linkButton containerElement={<Link to="/"/>}/>
            <Tab label="Test" value="/test" linkButton containerElement={<Link to="/test"/>}/>
          </Tabs>*/}

          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
App.need = [() => {
  return fetchPeople();
}, () => {
  return fetchPersonAttributes();
}];

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
