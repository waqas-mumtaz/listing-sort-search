import React, { useState } from 'react';
import './shipmentList.css';
import { Link } from "react-router-dom";

const ShipmentList = props => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    // let { path, url } = useRouteMatch();


    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }


    // Logic for displaying todos
    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const currentTodos = props.shipments.slice(indexOfFirstTodo, indexOfLastTodo);


    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.shipments.length / perPage); i++) {
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        return (

            <li key={number} >
                <a id={number} onClick={(e) => handleClick(e)} class="pagination-link " aria-label="Page 1" aria-current="page"> {number}</a>
            </li>

        );
    });

    return (
        <div>

            <ul>
                {currentTodos.map(ig => (
                    <li key={ig.id}>
                        <Link to={`${ig.id}`}>{ig.name}</Link>
                    </li>
                ))
                }
            </ul>
            <nav class="pagination" role="navigation" aria-label="pagination">
                <ul class="pagination-list">
                    {renderPageNumbers}
                </ul>
            </nav>
        </div>
    );
};

export default ShipmentList;
