import React from 'react';

const Notification = React.memo(props => {

    return (
    <div className={`${props.class} notification`} >
    {/* <button className="delete"  onClick={props.onClose}></button> */}
    {props.children}
  </div>
  );
});

export default Notification;







