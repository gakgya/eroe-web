import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Loginpage from './pages/Loginpage/Loginpage';
import register from './pages/register/register';
import Mainpage from './pages/Mainpage/Mainpage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Loginpage} />
	  <Route exact path="/register" component={register}/> 
          <Route exact path="/main" component={Mainpage} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;