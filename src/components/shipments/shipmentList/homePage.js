import React, { useState, useContext, useCallback } from 'react';
import ShipmentPagination from './shipmentPagination';
import Search from './search';
import { ShipmentContext } from '../../../context/shipmentContext';

import Sort from './sort';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";


const HomePage = () => {

  const { setShipments } = useContext(ShipmentContext);

  let { path } = useRouteMatch();

  // search func
  const filteredShipmentsHandler = useCallback(filteredShipments => {
    setShipments(filteredShipments);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">All Shipments</h1>
        <div className="columns">
          <div className="column">
          {/* sort dropdown */}
          <Sort onLoadShipments={filteredShipmentsHandler} />

          {/* search bar */}
          <Search onLoadShipments={filteredShipmentsHandler} />

            {/* All shipments */}
            <ShipmentPagination />
            </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
