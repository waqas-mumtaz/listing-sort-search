import React, {useState, useEffect} from 'react';
import Card from '../../UI/card';
import LoadingIndicator from '../../UI/LoadingIndicator';
import './updateShipmentName.css';

const Form = React.memo(props => {
  const [shipmentName, setShipmentName] = useState('');

  useEffect(()=> {
    setShipmentName(props.name)
  },[props.name])

  const submitHandler = event => {
    event.preventDefault();
    props.onUpdateShipmentTitle({ name: shipmentName });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={shipmentName}
              onChange={event => {
                setShipmentName(event.target.value);
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
