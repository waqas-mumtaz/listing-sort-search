import React, { useState, useContext, useRef, useCallback, useEffect } from 'react';
import ShipmentList from './shipments';
import Search from './search';
import Notification from '../../UI/Notification';
import LoadingIndicator from '../../UI/LoadingIndicator';
import { ShipmentContext } from '../../../context/shipmentContext';
import useHttp from '../../../hooks/http';

import Sort from './sort';

const Shipments = () => {
  const { setShipments } = useContext(ShipmentContext);

  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length < 1 ? '' : `?id=${enteredFilter}`;
        sendRequest(
          'http://localhost:3000/shipments' + query,
          'GET'
        );

      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, sendRequest, inputRef]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedShipments = [...data];
      setShipments(loadedShipments);
    }
  }, [data, isLoading, error]);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">All Shipments</h1>
        <section className='section'>
          <div class="columns">
            <div class="column is-two-thirds">
              <Search inputRef={inputRef} inputValue={(value) => (setEnteredFilter(value))} />
            </div>
            <div class="column">
              <Sort />
            </div>
          </div>
        </section>
        <div className="columns">
          <div className="column">
          {error ? 
          <Notification onClose={clear} class='is-danger is-light'>{error}</Notification> :
          isLoading ? <LoadingIndicator /> :  <ShipmentList />
          }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shipments;
