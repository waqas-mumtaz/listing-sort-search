import React, { useState, useEffect, useRef } from 'react';
import ErrorModal from '../../UI/ErrorModal';
import useHttp from '../../../hooks/http';
import Card from '../../UI/card';
import './search.css';

const Search = React.memo(props => {
  const { onLoadShipments } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();
  const { isLoading, data, error, sendRequest, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length < 5 ? '' : `?id=${enteredFilter}`;
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
      const loadedShipments = [];
      for (const key in data) {
        loadedShipments.push({
          id: data[key].id,
          name: data[key].name
        });
      }
      onLoadShipments(loadedShipments);
    }
  }, [data, isLoading, error, onLoadShipments]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
