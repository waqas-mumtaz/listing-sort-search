import React, { useState } from 'react';
import './search.css';

const Search = React.memo(({inputRef, inputValue}) => {

  const [enteredFilter, setEnteredFilter] = useState('');

  const inputHandler = (e) => {
    inputValue(e.target.value); 
    setEnteredFilter(e.target.value)
  }

  return (
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Search</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input
                      ref={inputRef}
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
