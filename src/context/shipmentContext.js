import React, { useState } from 'react';

export const ShipmentContext = React.createContext({
  shipments: [],
  setShipments: () => {}
});

const ShipmentContextProvider = props => {
  const [fetchShipments, setFetchShipments] = useState([]);

  const updateShipmentsHandler = (getShipments) => {
    setFetchShipments(getShipments);
  };

  return (
    <ShipmentContext.Provider
      value={{ shipments: fetchShipments,  setShipments: updateShipmentsHandler }}
    >
      {props.children}
    </ShipmentContext.Provider>
  );
};

export default ShipmentContextProvider;