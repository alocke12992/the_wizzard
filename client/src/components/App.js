import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Profile from './Profile';
import Tags from './Tags';
import TagList from './TagList'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <ProtectedRoute exact path='/' component={ Profile } />
            <ProtectedRoute exact path='/tags/:tag' component={ TagList } />
            <AuthRoute exact path='/login' component={ Login } />
            <AuthRoute exact path='/register' component={ Register } />
            <ProtectedRoute exact path='/profile' component={ Profile } />
            <ProtectedRoute exact path='/tags' component={ Tags } />
            <Route component={ NoMatch } />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
