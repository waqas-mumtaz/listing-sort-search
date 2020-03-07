import React from 'react';
import { Link } from "react-router-dom";

import './shipmentListItems.css';

const ShipmentListItems = ({list}) => {
    return (
        
        <section>
                {list.map(ig => (
                    <div className="tile is-parent" key={ig.id}>
                    <article className="tile is-child notification ">
                      <p className="title"><Link to={`${ig.id}`}>{ig.name}</Link></p>
                      <p className="subtitle">Aligned with the right tile</p>
                      <div className="content">
                      </div>
                    </article>
                  </div>
                ))
                }
            </section>
    );
}
export default ShipmentListItems;