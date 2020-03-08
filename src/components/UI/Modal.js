import React from 'react';

// import './Modal.css';

const Modal = React.memo(props => {
  return (
      <div className="modal is-active">
        <div className="modal-background"  onClick={props.onClose}></div>
        <div className="modal-content"> 
        <div className="box">
        {props.children} 
        </div>
        </div>
        <button className="modal-close is-large" aria-label="close"  onClick={props.onClose}></button>
      </div>
  );
});

export default Modal;
