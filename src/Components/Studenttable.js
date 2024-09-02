import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Pagination from './Pagination';

const TableComponent = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState(null);
 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedItems = () => {
    if (!sortConfig) return currentItems;

    return [...currentItems].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  };

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(sortedItems());
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'table.xlsx');
  };

  return (
    <div>
    <button className='btn btn-primary mb-5' onClick={exportToExcel}>Export to Excel</button>
      <table className='table table-hover tabe-striped table-bordered'>
        <thead>
          <tr>
            <th onClick={() => handleSort('roll')}>Roll no</th>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('email')}>Email</th>
            <th onClick={() => handleSort('mobile')}>Mobile Number</th>
            <th onClick={() => handleSort('year')}>Year</th>
            <th onClick={() => handleSort('branch')}>Branch</th>
            <th onClick={() => handleSort('college')}>College Branch</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems().map((item) => (
            <tr key={item.id}>
              <td>{item.rollno}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.year}</td>
              <td>{item.branch}</td>
              <td>{item.collegebranch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
<Pagination />

export default TableComponent;