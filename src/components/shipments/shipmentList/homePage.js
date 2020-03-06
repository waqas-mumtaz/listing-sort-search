import React, { useState, useContext, useCallback } from 'react';
import ShipmentPagination from './shipmentPagination';
import Search from './search';
import { ShipmentContext } from '../../../context/shipmentContext';
import ShipmentDetails from '../shipmentDetails/shipmentDetails';

import Sort from './sort';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";


const Shipments = () => {

  const { setShipments } = useContext(ShipmentContext);

  let { path } = useRouteMatch();

  // search func
  const filteredShipmentsHandler = useCallback(filteredShipments => {
    setShipments(filteredShipments);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">FreightHub Frontend Coding Challenge</h1>
        <div className="columns">
          <div className="column"></div>
          {/* sort dropdown */}
          <Sort onLoadShipments={filteredShipmentsHandler} />

          {/* search bar */}
          <Search onLoadShipments={filteredShipmentsHandler} />

          <Switch>
            <Route exact path={path}>

              {/* All shipments */}
              <ShipmentPagination />
            </Route>
            <Route path={`/:id`}>

              {/* shipment details */}
              <ShipmentDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </section>
  );
}

export default Shipments;
