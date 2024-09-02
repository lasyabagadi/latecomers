import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button className='btn btn-primary' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? 'active' : null}>
            <button className='btn btn-info btn-xs m-2 mt-0' onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
        <li>
          <button className='btn btn-primary btn-xs' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;