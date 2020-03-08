import React from 'react';
import { Link } from "react-router-dom";

import './shipmentListItems.scss';

const ShipmentListItems = ({ list }) => {
  return (
    <section>
      {list.map(item => (
        <div className="tile is-parent" key={item.id}>
          <article className="tile is-child notification ">
          {item.status && <span className={`${item.status} badge`}>{item.status}</span> }
            <div class="content is-small">
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
      ))
      }
    </section>
  );
}
export default ShipmentListItems;