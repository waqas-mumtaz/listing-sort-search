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
        reqExtra,
        reqIdentifer,
        clear
      } = useHttp();
    

    let { id } = useParams();


//   useEffect(() => {
//         dispatchHttp({ type: 'SEND' });
//         fetch(
//           'http://localhost:3000/shipments/' + id
//         )
//           .then(response => {
//             dispatchHttp({ type: 'RESPONSE' });
//             return response.json();
//           })
//           .then(responseData => {
//             const loadedShipments = {...responseData};
//             setShipments(loadedShipments);
//           }).catch(error => {
//             dispatchHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
//           });

//   }, []);

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
      JSON.stringify(result),
      result,
      'UPDATE_TITLE'
    );
  }, [sendRequest]);


//   const updateShipmentTitle = title => {
//     let getShipmentdata = {...shipments}
//     let result = Object.assign(getShipmentdata, title);
//     dispatchHttp({ type: 'SEND' });
//      fetch(
//      'http://localhost:3000/shipments/' + id, {
//       method: 'PUT',
//       body: JSON.stringify(result),
//       headers: { 'Content-Type': 'application/json' }
//     })
//       .then(response => {
//         dispatchHttp({ type: 'RESPONSE' });
//         return response.json();
//       })
//       .then(responseData => {
//           console.log(responseData)
//         const loadedShipments = {...responseData};
//         setShipments(loadedShipments);
//       }).catch(error => {
//         dispatchHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
//       });
    
 //  };

  const clearError = () => {
   // dispatchHttp({ type: 'CLEAR' });
  }

  return (
    <div>
              {error && <ErrorModal  onClose={clear}>{error}</ErrorModal>}
                {shipments.name}
            <Form name={shipments.name} onUpdateShipmentTitle={updateShipmentTitle} loading={isLoading}/>
           
    </div>
  );
};

export default ShipmentDetails;
