import React from 'react';
import Shipments from './components/shipments/shipmentList/homePage';
import NavBar from './components/UI/navBar'
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
const App = props => {
  //let { path } = useRouteMatch();
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Shipments />
          </Route>
          <Route path={`/:id`}>
              {/* shipment details */}
              <ShipmentDetails />
            </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
