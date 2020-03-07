import React from 'react';
import HomePage from './components/shipments/shipmentList/homePage';
import ShipmentDetails from './components/shipments/shipmentDetails/shipmentDetails';

import NavBar from './components/UI/navBar';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const App = props => {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
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
