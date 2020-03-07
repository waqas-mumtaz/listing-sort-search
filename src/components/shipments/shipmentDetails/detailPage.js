import React, { useEffect } from 'react';

const DetailPage = ({shipment, showFormHandler}) => {

  return (
    <section className="section">
    <div className="container">
      <h1 className="title">{shipment.name} 
      <span onClick={showFormHandler}><i className="fa fa-pencil-square" aria-hidden="true"></i></span>
      </h1>
      <section className='section'>
        <div class="columns">
          <div class="column">

          </div>
        </div>
      </section>
    
    </div>
  </section>
  );
};

export default DetailPage;
