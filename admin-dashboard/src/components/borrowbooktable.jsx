import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const { id: _ } = useParams();
  const [borrowbooklists, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);
  const [sortConfig, setSortConfig] = useState(null);

  // Function to fetch data initially
  const fetchData = () => {
    fetch("http://localhost:5000/getborrow-books")
      .then((res) => res.json())
      .then((borrowbooklists) => {
        setCards(borrowbooklists);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentPage, searchQuery]); // Include currentPage and searchQuery in dependency array

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedData = borrowbooklists.filter((borrowbook) =>
    borrowbook.BookName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    borrowbook.Genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    borrowbook.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    borrowbook.timestamp.toLowerCase().includes(searchQuery.toLowerCase()) ||
    borrowbook.College.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredAndSortedData.slice(indexOfFirstData, indexOfLastData);

  return (
    <div className="row">
      <div className="w-120 bg-white rounded p-4">
        <form className="form-inline my-2 my-lg-0">
          <input
            type="text"
            placeholder="Search by Book Name"
            className="form-control mb-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <table className="table table-borderless datatable">
          <thead className="thead-light">
            <tr>
              <th scope="col">BookName</th>
              <th scope="col">Book Genre</th>
              <th scope="col">Borrowed By</th>
              <th scope="col">Borrowed On</th>
              <th scope="col">College</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((borrowbook, index) => (
              <tr key={index}>
                <td>{borrowbook.BookName}</td>
                <td>{borrowbook.Genre}</td>
                <td>{borrowbook.Name}</td>
                <td>{borrowbook.timestamp}</td>
                <td>{borrowbook.College}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredAndSortedData.length / perPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => setCurrentPage(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UsersTable;
