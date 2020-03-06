import React from 'react';
import { Link } from "react-router-dom";

import './shipmentListItems.css';

const ShipmentListItems = ({list}) => {
    return (
        <ul>
                {list.map(ig => (
                    <li key={ig.id}>
                        <Link to={`${ig.id}`}>{ig.name} ss</Link>
                    </li>
                ))
                }
            </ul>
    );
}
export default ShipmentListItems;