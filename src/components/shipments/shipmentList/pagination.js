import React from 'react';


const Pagination = ({ paginationHandler, perPageItem, currentPage, listLength }) => {

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(listLength / perPageItem); i++) {
        pageNumbers.push(i);
    }


    return (
        <section className="section">
            <div className="columns">
                <div className="column">
                    <nav className="pagination is-pulled-right" role="navigation" aria-label="pagination">
                        <ul className="pagination-list">
                            {
                                pageNumbers.map(number => (
                                    <li key={number} >
                                        <a id={number} onClick={(e) => paginationHandler(Number(e.target.id))} className={(currentPage === number ? 'is-current ' : '') + 'pagination-link'} aria-label="Page {number}" aria-current="page"> {number}</a>
                                    </li>

                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Pagination;
