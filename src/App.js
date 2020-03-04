import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shipments from './components/shipments/shipments';
const App = props => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/">
            <Shipments />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
