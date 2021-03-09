import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Admin from './Admin';
import Header from './Header';

export default function Main() {
  const [isLoggedIn, setLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') || 'false');
  return (
    <div>
      <Router>
        <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
          <Switch>
            {/* <Route key="/recommendation" exact path="/recommendation" component={Shop} /> */}
            <Route path="/Home" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Login" exact component={() => <Login setLoggedIn={setLoggedIn} />} />
            <Route path="/Admin" exact component={Admin} />
            <Route path="/" component={Home} />
          </Switch>
      </Router>
    </div>
  );
}
