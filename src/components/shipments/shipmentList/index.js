import React, { useState, useContext, useEffect } from 'react';
import ShipmentList from './shipments';
import Search from './search';
import Notification from '../../UI/Notification';
import { ShipmentContext } from '../../../context/shipmentContext';
import useHttp from '../../../hooks/http';

import Sort from './sort';

const Shipments = () => {
  const { setShipments } = useContext(ShipmentContext);

  //search input
  const [enteredFilter, setEnteredFilter] = useState('');
  const [dataFetched, setDateFetched] = useState(false);
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    sendRequest(
      '/shipments',
      'GET'
    );

  }, [sendRequest]);

  //search func
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoading && !error && data) {
        const loadedShipments = [...data];
        const filteredShipments = loadedShipments.filter((data) => {
          if (enteredFilter.length === 0)
            return data
          else if (data.id.toUpperCase().includes(enteredFilter.toUpperCase())) {
            return data
          }
        })
        setShipments(filteredShipments);
        setDateFetched(true);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [data, isLoading, error, enteredFilter]);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">All Shipments</h1>
        <section className='section'>
          <div className="columns">
            <div className="column is-two-thirds">
              <Search inputValue={(value) => (setEnteredFilter(value))} />
            </div>
            <div className="column">
              <Sort />
            </div>
          </div>
        </section>
        <div className="columns">
          <div className="column">
            {error ?
              <Notification onClose={clear} className='is-danger is-light'>{error}</Notification> :
              <ShipmentList dataFetched={dataFetched} />
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shipments;
