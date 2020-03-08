import React from 'react';
import { Link } from "react-router-dom";

import './shipmentListItems.scss';

const ShipmentListItems = ({ list }) => {


  const renderedList = list !== 0 ? list.map(item => (
    <div className="tile is-parent" key={item.id}>
      <article className="tile is-child notification ">
      {item.status && <span className={`${item.status} badge`}>{item.status}</span> }
        <div className="content is-small">
            <h2>
              <Link to={`${item.id}`}>{item.name}</Link>                  
              </h2>
            <p className="subtitle">ID: ({item.id})</p>
          <ul>
           {item.mode && <li>Mode: <b>{item.mode}</b></li> }
           {item.type && <li>Type: <b>{item.type}</b></li> }
           {item.destination && <li>Destination: <b>{item.destination}</b></li> }
           {item.origin && <li>Origin: <b>{item.origin}</b></li> }
          </ul>
        </div>
      </article>
    </div>
  )) : 
    <div className="tile is-parent">
      <article className="tile is-child notification ">
        <div className="content is-small">
            <h2>No Shipment Found</h2>
        </div>
      </article>
    </div>

  return (
    <section>
      { renderedList }
    </section>
  );
}
export default ShipmentListItems;