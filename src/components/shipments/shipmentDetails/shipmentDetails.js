import React, { useState, useEffect, useCallback } from 'react';
import Modal from '../../UI/Modal';
import Form from './updateShipmentName';
import useHttp from '../../../hooks/http';

import { useParams } from "react-router-dom";
  
const ShipmentDetails = props => {

    const [shipment, setShipment] = useState([]);
    const { isLoading, error, data,  sendRequest,  clear } = useHttp();
    let { id } = useParams();
  
  useEffect(() => {
        sendRequest(
            'http://localhost:3000/shipmentxxs/' + id,
          'GET'
        );
  }, [ sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedShipments = {...data};
      setShipment(loadedShipments);
    }
    console.log(error)
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
    <section className="section">
    <div className="container">
      <h1 className="title">{shipment.name}</h1>
      <div className="columns">
        <div className="column">
        {error && <Modal onClose={clear}>{error}</Modal>}

         <Form 
         name={shipment.name} 
         onUpdateShipmentTitle={updateShipmentTitle} 
         loading={isLoading} />
           {/* <Modal>ss</Modal> */}

        </div>
      </div>
    </div>
  </section>
  );
};

export default ShipmentDetails;
