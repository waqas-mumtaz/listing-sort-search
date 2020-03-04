import React from 'react';
import Card from '../UI/card';
import './form.css';


const Form = React.memo(props => {
  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="form">
              <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" />
          </div>
          <div className="form__actions">
            <button type="submit">update shipment name</button>
          </div>
        </form>
        </Card>
    </section>
  );
});

export default Form;
