import React, { useState, useEffect, useCallback } from 'react';
import Notification from '../../UI/Notification';
import LoadingIndicator from '../../UI/LoadingIndicator';
import DetailPage from './detailPage';
import UpdateShipmentNameForm from './updateShipmentName';
import useHttp from '../../../hooks/http';

import { useParams } from "react-router-dom";

const ShipmentDetails = () => {

    //to store single shipment
    const [shipment, setShipment] = useState([]);

    //Display Edit Form
    const [showForm, setShowForm] = useState(false);

    const { isLoading, error, data, sendRequest } = useHttp();

    let { id } = useParams();

    useEffect(() => {
        sendRequest(
            '/shipments/' + id,
            'GET'
        );
    }, [sendRequest, id]);

    useEffect(() => {
        if (!isLoading && !error && data) {
            const loadedShipments = { ...data };
            setShipment(loadedShipments);
        }
    }, [data, isLoading, error]);


    //update shipment name func
    const updateShipmentTitle = useCallback(title => {
        let getShipmentdata = { ...shipment }
        let result = Object.assign(getShipmentdata, title);
        sendRequest(
            '/shipments/' + id,
            'PUT',
            JSON.stringify(result)
        );
    }, [sendRequest, shipment, id]);

    // detail page data
    const renderedDetailPage = error ?
        <Notification className='is-danger is-light'>{error}</Notification> :
        isLoading ?
            <LoadingIndicator /> :
            <DetailPage shipment={shipment} showFormHandler={() => (setShowForm(true))} />

    // shipment name edit form
    const renderedForm = showForm &&
        <UpdateShipmentNameForm
            name={shipment.name}
            onUpdateShipmentTitle={updateShipmentTitle}
            loading={isLoading}
            hasError={error}
            showFormHandler={() => (setShowForm(false))}
        />

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        {renderedDetailPage}
                        {renderedForm}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ShipmentDetails;
