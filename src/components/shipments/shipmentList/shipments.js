import React, { useState, useContext } from 'react';
import { ShipmentContext } from '../../../context/shipmentContext';
import Pagination from './pagination';
import ShipmentListItems from './shipmentListItems';
import LoadingIndicator from '../../UI/LoadingIndicator';

const ShipmentList = ({ dataFetched }) => {
    const { shipments } = useContext(ShipmentContext);

    const [currentPage, setCurrentPage] = useState(1);

    //items per page
    const perPage = 20;

    const indexOfLastShipment = currentPage * perPage;
    const indexOfFirstShipment = indexOfLastShipment - perPage;

    const currentShipments = shipments.slice(indexOfFirstShipment, indexOfLastShipment);

    return (
        <>
            {
                !dataFetched ?
                    <LoadingIndicator /> :
                    <>
                        <Pagination
                            paginationHandler={(val) => (setCurrentPage(val))}
                            perPageItem={perPage}
                            currentPage={currentPage}
                            listLength={shipments.length}
                        />
                        <ShipmentListItems list={currentShipments} />

                        <Pagination
                            paginationHandler={(val) => (setCurrentPage(val))}
                            perPageItem={perPage}
                            currentPage={currentPage}
                            listLength={shipments.length}
                        />
                    </>

            }

        </>
    );
};

export default ShipmentList;
