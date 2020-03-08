import React from 'react';
import { Link } from "react-router-dom";
import './detailPage.scss';

const DetailPage = ({ shipment, showFormHandler }) => {

  return (
      <section className="section">
        <div className="container">
          <Link to="/" className="button is-link">Back</Link>
          <section className='section'>
            <div className="columns">
              <div className="column">
                {shipment.length !== 0  ?
                  <div className="tile is-parent" key={shipment.id}>
                    <article className="tile is-child notification ">
                      {shipment.status && <span className={`${shipment.status} badge`}>{shipment.status}</span>}
                      <div className="content is-medium">
                        <h2>
                          {shipment.name}
                          <span onClick={showFormHandler} className="edit-btn">
                            <i className="fa fa-pencil-square" aria-hidden="true"></i>
                          </span>
                        </h2>
                        <p className="subtitle">ID: ({shipment.id})</p>
                        <ul>
                          {shipment.mode && <li>Mode: <b>{shipment.mode}</b></li>}
                          {shipment.type && <li>Type: <b>{shipment.type}</b></li>}
                          {shipment.destination && <li>Destination: <b>{shipment.destination}</b></li>}
                          {shipment.origin && <li>Origin: <b>{shipment.origin}</b></li>}
                          {shipment.total && <li>Total: <b>{shipment.total}</b></li>}
                          {shipment.userId && <li>User ID: <b>{shipment.userId}</b></li>}
                        </ul>
                        {shipment.cargo &&
                          <div className="section">
                            <h5>Cargo Information</h5>
                            <table className="table is-bordered">
                              <thead>
                                <tr>
                                  <th>Type</th>
                                  <th>Description</th>
                                  <th>Volume</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  shipment.cargo.map(item => (
                                    <tr>
                                      <td>{item.type}</td>
                                      <td>{item.description}</td>
                                      <td>{item.volume}</td>
                                    </tr>
                                  ))

                                }
                              </tbody>
                            </table>
                          </div>}
                        {shipment.services &&
                          <div className="section">
                            <h5>Serivces</h5>
                            <table className="table is-bordered">
                              <thead>
                                <tr>
                                  <th>Type</th>
                                  <th>Value</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  shipment.services.map(item => (
                                    <tr>
                                      <td>{item.type}</td>
                                      <td>{item.value}</td>
                                    </tr>
                                  ))

                                }
                              </tbody>
                            </table>
                          </div>}
                      </div>
                    </article>
                  </div>
                  :
                  <div className="tile is-parent">
                    <article className="tile is-child notification ">
                      <div className="content is-medium">
                        <h2> Loading... </h2>
                      </div>
                    </article>
                  </div>
                }
              </div>
            </div>
          </section>

        </div>
      </section>
  );
};

export default DetailPage;
