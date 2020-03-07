import React, { useState, useEffect } from 'react';
import Modal from '../../UI/Modal';
import Notification from '../../UI/Notification';
import LoadingIndicator from '../../UI/LoadingIndicator';

import './updateShipmentName.css';

const UpdateShipmentNameForm = React.memo(props => {
  const [shipmentName, setShipmentName] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationClass, setNotificationClass] = useState('');

  useEffect(() => {
    setShipmentName(props.name)
  }, [props.name])

  useEffect(() => {
    if (!props.loading && !props.hasError) {
      setNotificationClass('is-success is-light');
      setNotificationMessage('Name Updated Successfully')
    } else {
      setNotificationClass('is-danger is-light');
      setNotificationMessage('Something Went Wrong')
    }

  }, [props.loading, props.hasError, isSubmit]);

  const submitHandler = event => {
    setIsSubmit(true)
    event.preventDefault();
    props.onUpdateShipmentTitle({ name: shipmentName });

    const timer = setTimeout(() => {
      setIsSubmit(false)
      props.showFormHandler();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };

  };

  return (
    <Modal onClose={props.showFormHandler}>
      {isSubmit &&
        <Notification class={notificationClass}>{notificationMessage}</Notification>
      }
      {props.loading ?
        <LoadingIndicator /> :
        <form onSubmit={submitHandler}>
          <div class="field">
            <label class="label">Shipment Name</label>
            <div class="control">
              <input
                type="text"
                id="title"
                className="input"
                value={shipmentName}
                onChange={event => {
                  setShipmentName(event.target.value);
                }}
              />
            </div>
          </div>
          <div class="field is-grouped">
            <p class="control">
              <button type="submit" className="button is-primary" disabled={isSubmit && 'disabled'} >
                Update Name
            </button>
            </p>
            <p class="control">
              <a class="button is-light" onClick={props.showFormHandler}>
                Cancel
            </a>
            </p>
          </div>
        </form>}

    </Modal>
  );
});

export default UpdateShipmentNameForm;
