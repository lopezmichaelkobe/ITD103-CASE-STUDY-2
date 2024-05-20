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
    fetch("http://localhost:5000/books")
      .then(res => res.json())
      .then(books => {
        setBooks(books);
      })
      .catch(e => console.log(e.message));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/deletebook/${id}`)
      .then(res => {
        console.log(res);
        // After deletion, refresh the data
        fetchData();
      })
      .catch(err => console.log(err));
  };

  const filteredBooks = books.filter((book) => (
    book.BookName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.Author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.YearPublished.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.Publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.Genre.toLowerCase().includes(searchQuery.toLowerCase())
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
              <th scope="col">Book Name</th>
              <th scope="col">Book Author</th>
              <th scope="col">Year Published</th>
              <th scope="col">Publisher</th>
              <th scope="col mx-2">Genre</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((book, index) => (
              <tr key={index}>
                <td>{book.BookName}</td>
                <td>{book.Author}</td>
                <td>{book.YearPublished}</td>
                <td>{book.Publisher}</td>
                <td>{book.Genre}</td>
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
