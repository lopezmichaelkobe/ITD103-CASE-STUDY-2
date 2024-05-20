import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";

function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const { id: _ } = useParams();
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:5000/sensordata")
      .then(res => res.json())
      .then(sensor => {
        setBooks(sensor);
      })
      .catch(e => console.log(e.message));
  };



  const filteredBooks = books.filter((book) => (
    book.temperature.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.humidity.toLowerCase().includes(searchQuery.toLowerCase())
  ));

  // Pagination calculation
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const currentData = filteredBooks.slice(indexOfFirstData, indexOfLastData);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

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

        <table className='table table-borderless datatable'>
          <thead className="thead-light">
            <tr>
              <th scope="col">Temperature</th>
              <th scope="col">Humidity</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((sensor, index) => (
              <tr key={index}>
                <td>{sensor.temperature}°C</td>
                <td>{sensor.humidity}%</td>
                <td>{sensor.timestamp}</td>
                <td className="">
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredBooks.length / perPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
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
