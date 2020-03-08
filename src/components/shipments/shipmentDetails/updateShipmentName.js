import React, { useState, useEffect } from 'react';
import Modal from '../../UI/Modal';
import Notification from '../../UI/Notification';
import LoadingIndicator from '../../UI/LoadingIndicator';

const UpdateShipmentNameForm = React.memo((props) => {

  const {onUpdateShipmentTitle, name, loading, hasError, showFormHandler} = props;
  const [shipmentName, setShipmentName] = useState('');
  
  //to control submit button
  const [isSubmit, setIsSubmit] = useState(false);
  
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationClass, setNotificationClass] = useState('');

  useEffect(() => {
    //set shipment name when component rendered
    setShipmentName(name)
  }, [name])

  useEffect(() => {

    //if no errors
    if (!loading && !hasError) {
      setNotificationClass('is-success is-light');
      setNotificationMessage('Name Updated Successfully')
    } else {
      setNotificationClass('is-danger is-light');
      setNotificationMessage('Something Went Wrong')
    }

  }, [loading, hasError]);

  const submitHandler = event => {
    event.preventDefault();

    //disable button when form is submitted
    setIsSubmit(true)

    onUpdateShipmentTitle({ name: shipmentName });

    //hide form popup after 1.5 secs
    const timer = setTimeout(() => {
      setIsSubmit(false)
      showFormHandler();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };

  };

  return (
    <Modal onClose={showFormHandler}>
      {isSubmit &&
        <Notification className={notificationClass}>{notificationMessage}</Notification>
      }
      {props.loading ?
        <LoadingIndicator /> :
        <form onSubmit={submitHandler}>
          <div className="field">
            <label className="label">Shipment Name</label>
            <div className="control">
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
          <div className="field is-grouped">
            <p className="control">
              <button type="submit" className="button is-primary" disabled={isSubmit && 'disabled'} >
                Update Name
            </button>
            </p>
            <p className="control">
              <span className="button is-light" onClick={showFormHandler}>
                Cancel
            </span>
            </p>
          </div>
        </form>}

    </Modal>
  );
});

export default UpdateShipmentNameForm;
