
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { deepOrange500 } from "material-ui/styles/colors";
import AppBar from "material-ui/AppBar";
import { Link } from "react-router";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Helmet from "react-helmet";
import DevTools from "./components/DevTools";
import { fetchLocalizationLabels } from "../Intl/IntlActions";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import { main, mainContainer } from "../../styles/styles";


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  }
});

const Logged = (props) => (
  <IconMenu {...props}
            iconButtonElement={
              <IconButton><MoreVertIcon/></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
    <Link to="/settings"><MenuItem primaryText="Settings"/></Link>
    <MenuItem primaryText="Sign out"></MenuItem>
  </IconMenu>
);

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    //noinspection JSUnresolvedVariable
    this.props.dispatch(fetchLocalizationLabels(this.props.intl.locale));
    this.setState({ isMounted: true }); // eslint-disable-line
    this.setState({ open: false }); // eslint-disable-line
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    //noinspection JSUnresolvedVariable
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={main}>
          {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
          <Helmet
            title="Personoj"
            titleTemplate="%s - Blog App"
            meta={[
              { charset: 'utf-8' },
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
          <AppBar title="Personoj"
                  onLeftIconButtonTouchTap={this.handleToggle}
                  iconElementRight={<Logged></Logged>}>
          </AppBar>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}
          >
            <Link to="/users"><MenuItem primaryText="Users" onTouchTap={this.handleClose}/></Link>
            <Link to="/people"><MenuItem primaryText="People" onTouchTap={this.handleClose}/></Link>
            <Link to="/person-attributes"><MenuItem primaryText="Attributes" onTouchTap={this.handleClose}/></Link>
          </Drawer>

          {/*<Tabs value={pathname}>
           <Tab label="Home" value="/" linkButton containerElement={<Link to="/"/>}/>
           <Tab label="Test" value="/test" linkButton containerElement={<Link to="/test"/>}/>
           </Tabs>*/}

          <div style={mainContainer}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
App.need = [];

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
