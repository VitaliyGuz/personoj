/* eslint-disable global-require */
import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
 https://github.com/reactjs/react-router/issues/2182 and
 https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/User/pages/RegistrationPage');
  require('./modules/User/pages/SignInPage');
  /*require('./modules/Person/pages/PersonListPage');
  require('./modules/Person/pages/PersonDetailPage');
  require('./modules/Person/pages/PersonAttributeListPage');
  require('./modules/Person/pages/PersonAttributeDetailPage');*/
  require('./modules/Person/pages/PersonAttributeFormPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/sign_in"/>
    <Route path="/registration"
           getComponent={(nextState, cb) => {
             require.ensure([], require => {
               cb(null, require('./modules/User/pages/RegistrationPage').default);
             });
           }}
    />
    <Route path="/sign_in"
           getComponent={(nextState, cb) => {
             require.ensure([], require => {
               cb(null, require('./modules/User/pages/SignInPage').default);
             });
           }}
    />
{/*    <Route path="/people"
           getComponent={(nextState, cb) => {
             require.ensure([], require => {
               cb(null, require('./modules/Person/pages/PersonListPage').default);
             });
           }}>
      <Route path=":cuid"
             getComponent={(nextState, cb) => {
               require.ensure([], require => {
                 cb(null, require('./modules/Person/pages/PersonDetailPage').default);
               });
             }}
      />
    </Route>*/}
    <Route path="/person-attributes/new"
           getComponent={(nextState, cb) => {
             require.ensure([], require => {
               cb(null, require('./modules/Person/pages/PersonAttributeFormPage').default);
             });
           }}/>
   {/* <Route path="/personAttributes"
           getComponent={(nextState, cb) => {
             require.ensure([], require => {
               cb(null, require('./modules/Person/pages/PersonAttributeListPage').default);
             });
           }}>
      <Route path=":cuid"
             getComponent={(nextState, cb) => {
               require.ensure([], require => {
                 cb(null, require('./modules/Person/pages/PersonAttributeDetailPage').default);
               });
             }}/>
    </Route>*/}
  </Route>
);
