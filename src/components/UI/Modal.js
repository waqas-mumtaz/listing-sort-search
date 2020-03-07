import React from 'react';

// import './Modal.css';

const Modal = React.memo(props => {
  return (
      <div class="modal is-active">
        <div class="modal-background"  onClick={props.onClose}></div>
        <div class="modal-content"> 
        <div className="box">
        {props.children} 
        </div>
        </div>
        <button class="modal-close is-large" aria-label="close"  onClick={props.onClose}></button>
      </div>
  );
});

export default Modal;
