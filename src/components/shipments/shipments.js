import React, { useState, useCallback } from 'react';
import ShipmentList from './shipmentList';
import Form from './form';
import Search from './search';

import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import ShipmentDetails from './shipmentDetails';

const Shipments = () => {
  const [shipments, setShipments] = useState([]);
  let { path } = useRouteMatch();

  const filteredShipmentsHandler = useCallback(filteredShipments => {
    setShipments(filteredShipments);
  }, []);

  function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
  
  const sort = (key, sort) => {
    let ss = [...shipments];
    ss.sort(compareValues(key, sort));
    setShipments(ss);
  }
  return (
    <div class="container">
  <div class="notification">
    This container is <strong>centered</strong> on desktop.
  </div>
      {/* <Form /> */}
        <ul>
          <li onClick={()=> sort('id', 'asc')}>sort by Id (Asc)</li>
          <li onClick={()=> sort('id', 'desc')}>sort by name (Desc)</li>
          <li onClick={()=> sort('name', 'asc')}>sort by name (Asc)</li>
          <li onClick={()=> sort('name', 'desc')}>sort by name (Desc)</li>
        </ul>
      <section>
      <Search onLoadShipments={filteredShipmentsHandler} />
       
        <Switch>
        <Route exact path={path}>
        <ShipmentList shipments={shipments} />
        </Route>
        <Route path={`/:id`}>
          <ShipmentDetails />
        </Route>
      </Switch>
      </section>
    </div>
  );
}

export default Shipments;
