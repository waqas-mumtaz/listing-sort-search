import React, { useState, useEffect } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Form from './form';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

const ShipmentDetails = props => {

    const [shipments, setShipments] = useState([]);
    const [test, settest] = useState(props.test);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    let { id } = useParams();


  useEffect(() => {
       setIsLoading(true);
        fetch(
          'http://localhost:3000/shipments/' + id
        )
          .then(response => {
            setIsLoading(false);
            return response.json();
          })
          .then(responseData => {
            const loadedShipments = {...responseData};
            setShipments(loadedShipments);
          }).catch(error => {
            setError('Something went wrong!');
            setIsLoading(false);
          });

  }, []);

  const updateShipmentTitle = title => {
    let getShipmentdata = {...shipments}
    let result = Object.assign(getShipmentdata, title);
    setIsLoading(true);
     fetch(
     'http://localhost:3000/shipments/' + id, {
      method: 'PUT',
      body: JSON.stringify(result),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        setIsLoading(false);
        return response.json();
      })
      .then(responseData => {
          console.log(responseData)
        const loadedShipments = {...responseData};
        setShipments(loadedShipments);
      }).catch(error => {
        setError('Something went wrong!');
        setIsLoading(false);
      });;
    
  };

  const clearError = () => {
    setError(null);
  }

  return (
    <div>
              {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}

      <ul>
                {/* {shipments.map(ig => (
                    <li key={ig.id}>
                        <p>{ig.name}</p>
                    </li>
                ))
                } */}
                {shipments.name}
            </ul>
            <Form name={shipments.name} onUpdateShipmentTitle={updateShipmentTitle} loading={isLoading}/>
           
    </div>
  );
};

export default ShipmentDetails;
