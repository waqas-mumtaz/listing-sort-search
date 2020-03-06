import React, { useState, useEffect, useCallback } from 'react';
import ErrorModal from '../../UI/ErrorModal';
import Form from './updateShipmentName';
import useHttp from '../../../hooks/http';

import { useParams } from "react-router-dom";
  
const ShipmentDetails = props => {

    const [shipment, setShipment] = useState([]);

    const { isLoading, error, data,  sendRequest,  clear } = useHttp();

    let { id } = useParams();
  
  useEffect(() => {
        sendRequest(
            'http://localhost:3000/shipments/' + id,
          'GET'
        );
  }, [ sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedShipments = {...data};
      setShipment(loadedShipments);
    }
  }, [data, isLoading, error]);


  const updateShipmentTitle = useCallback(title => {
    let getShipmentdata = {...shipment}
    let result = Object.assign(getShipmentdata, title);
    sendRequest(
        'http://localhost:3000/shipments/' + id,
      'PUT',
      JSON.stringify(result)
    );
  }, [sendRequest]);


  return (
    <div>
              {error && <ErrorModal  onClose={clear}>{error}</ErrorModal>}
                {shipment.name}

            <Form name={shipment.name} onUpdateShipmentTitle={updateShipmentTitle} loading={isLoading}/>
           
    </div>
  );
};

export default ShipmentDetails;
