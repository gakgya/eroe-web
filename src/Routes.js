import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Mainpage from './pages/Mainpage/Mainpage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
	  <Route exact path="/Signup" component={Signup}/> 
          <Route exact path="/main" component={Mainpage} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;