import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/card';
import './search.css';

const Search = React.memo(props => {
  const { onLoadShipments } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query = enteredFilter.length < 5 ? '' : `?id=${enteredFilter}`;
        fetch(
          'http://localhost:3000/shipments' + query
        )
          .then(response => response.json())
          .then(responseData => {
            const loadedShipments = [];
            for (const key in responseData) {
              loadedShipments.push({
                id: responseData[key].id,
                name: responseData[key].name,
              });
            }
            onLoadShipments(loadedShipments);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadShipments, inputRef]);

  return (
    <section className="search">
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
