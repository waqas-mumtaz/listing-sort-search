import React, { useState } from 'react';
import './search.scss';

const Search = React.memo(({ inputValue}) => {

  const [enteredFilter, setEnteredFilter] = useState('');

  // Get input value on Change
  const inputHandler = (e) => {
          inputValue(e.target.value); 
          setEnteredFilter(e.target.value)
  }

  return (
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Search</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      type="text"
                      className='input'
                      value={enteredFilter}
                      onChange={event => inputHandler(event)}
                      placeholder='Enter Shipment ID'
                    />
                  </p>
                </div>
              </div>
            </div>
  );
});

export default Search;
