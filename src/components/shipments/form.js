import React, {useState, useEffect} from 'react';
import Card from '../UI/card';
import LoadingIndicator from '../UI/LoadingIndicator';
import './form.css';


const Form = React.memo(props => {

  const [enteredTitle, setEnteredTitle] = useState();


  const submitHandler = event => {
    event.preventDefault();
    props.onUpdateShipmentTitle({ name: enteredTitle });
  };

  return (
    <section className="ingredient-form">
      <Card>
        {enteredTitle}
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={event => {
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Update Title</button>
            {props.loading && <LoadingIndicator />}

          </div>
        </form>
      </Card>
    </section>
  );
});

export default Form;
