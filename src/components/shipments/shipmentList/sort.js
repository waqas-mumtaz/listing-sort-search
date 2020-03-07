import React, { useContext, useState, useEffect } from 'react';
import { ShipmentContext } from '../../../context/shipmentContext';

const Sort = React.memo(props => {
    const { shipments, setShipments } = useContext(ShipmentContext);

    const [dropdown, setDropdown] = useState(false);
    const [orderBool, setOrderBool] = useState(true);

    const compareValues = (key, order = 'asc') => ( 
        function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        }
    );
    

    const sort = (key) => {
        setOrderBool(!orderBool)
        let getShipments = [...shipments];
        getShipments.sort(compareValues(key, orderBool ? 'asc' : 'desc' ));
        setShipments(getShipments);
    }
    return (
        <div className={(dropdown ? 'is-active ' : '') + 'dropdown'}  onClick={()=> setDropdown(!dropdown) }>
            <div className="dropdown-trigger">
            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Sort Shipments</span>
                <span className="icon is-small">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
            </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item" onClick={() => sort('id')}>
             Sort by Id 
             <span>
             ( <i class="fa fa-long-arrow-up" aria-hidden="true"></i><i class="fa fa-long-arrow-down" aria-hidden="true"></i> 
                 )
             </span>
            </a>
            <a href="#" className="dropdown-item" onClick={() => sort('name')}>
             Sort by name  <span>
             ( <i class="fa fa-long-arrow-up" aria-hidden="true"></i><i class="fa fa-long-arrow-down" aria-hidden="true"></i> 
                 )
             </span>
            </a>
          </div>
        </div>
      </div>
    )
})
export default Sort;