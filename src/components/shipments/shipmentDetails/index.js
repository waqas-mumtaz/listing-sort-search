import React, { useState, useEffect, useCallback } from 'react';
import ErrorModal from '../../UI/Modal';
import Notification from '../../UI/Notification';
import LoadingIndicator from '../../UI/LoadingIndicator';
import DetailPage from './detailPage';
import UpdateShipmentNameForm from './updateShipmentName';
import useHttp from '../../../hooks/http';

import { useParams } from "react-router-dom";

const ShipmentDetails = props => {

    const [shipment, setShipment] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const { isLoading, error, data, sendRequest, clear } = useHttp();

    let { id } = useParams();

    useEffect(() => {
        sendRequest(
            'http://localhost:3000/shipments/' + id,
            'GET'
        );
    }, [sendRequest]);

    useEffect(() => {
        if (!isLoading && !error && data) {
            const loadedShipments = { ...data };
            setShipment(loadedShipments);
        }
    }, [data, isLoading, error]);


    const updateShipmentTitle = useCallback(title => {
        let getShipmentdata = { ...shipment }
        let result = Object.assign(getShipmentdata, title);
        sendRequest(
            'http://localhost:3000/shipments/' + id,
            'PUT',
            JSON.stringify(result)
        );
    }, [sendRequest]);

    const renderedDetailPage = error ?
        <Notification class='is-danger is-light'>{error}</Notification> :
        isLoading ?
            <LoadingIndicator /> :
            <DetailPage shipment={shipment} showFormHandler={() => (setShowForm(true))} />

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
