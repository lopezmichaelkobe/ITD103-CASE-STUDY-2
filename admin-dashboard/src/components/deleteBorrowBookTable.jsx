import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const { id: _ } = useParams();
  const [borrowbooklists, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  const fetchData = () => {
    fetch("http://localhost:5000/getborrow-books")
      .then(res => res.json())
      .then(borrowbooklists => {
        setCards(borrowbooklists);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = borrowbooklists.filter((borrowbook) =>
    borrowbook.BookName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    borrowbook.Genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    borrowbook.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    borrowbook.timestamp.toLowerCase().includes(searchQuery.toLowerCase()) ||
    borrowbook.College.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / perPage);
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/delete-borrowbook/${id}`)
      .then(res => {
        console.log(res);
        fetchData(); // Refetch data after deletion
      })
      .catch(err => console.log(err));
  };

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
              <th scope="col">Action</th>
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
                <td>
                  <button onClick={() => handleDelete(borrowbook._id)} className="btn btn-outline-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <ul className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => handlePageClick(index + 1)} className="page-link">
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
