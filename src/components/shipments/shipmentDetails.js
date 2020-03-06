import React, { useState, useEffect, useCallback } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Form from './form';
import useHttp from '../../hooks/http';

import { useParams } from "react-router-dom";
  
const ShipmentDetails = props => {

    const [shipments, setShipments] = useState([]);
    
    const {
        isLoading,
        error,
        data,
        sendRequest,
        clear
      } = useHttp();
    

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
      setShipments(loadedShipments);
    }
  }, [data, isLoading, error]);


  const updateShipmentTitle = useCallback(title => {
    let getShipmentdata = {...shipments}
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
                {shipments.name}
            <Form name={shipments.name} onUpdateShipmentTitle={updateShipmentTitle} loading={isLoading}/>
           
    </div>
  );
};

export default ShipmentDetails;
