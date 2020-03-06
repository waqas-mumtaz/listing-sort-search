import React, { useState, useContext } from 'react';
import { ShipmentContext } from '../../../context/shipmentContext';

import ShipmentListItems from './shipmentListItems';

const ShipmentPagination = props => {
    const {shipments } = useContext(ShipmentContext);

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(3);

    const paginationHandler = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const indexOfLastShipment = currentPage * perPage;
    const indexOfFirstShipment = indexOfLastShipment - perPage;
    const currentShipments = shipments.slice(indexOfFirstShipment, indexOfLastShipment);
 
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(shipments.length / perPage); i++) {
          pageNumbers.push(i);
      }

      console.log(pageNumbers)


    return (
        <div>
            <ShipmentListItems list={currentShipments}/>
        
            <nav class="pagination" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
                {
                    pageNumbers.map(number => (
                        <li key={number} >
                            <a id={number} onClick={(e) => paginationHandler(e)}  className={(currentPage === number ? 'is-current ' : '') + 'pagination-link'} aria-label="Page {number}" aria-current="page"> {number}</a>
                        </li>

                    ))
                }
            </ul>
        </nav>
           
        </div>
    );
};

export default ShipmentPagination;
