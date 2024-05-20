import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function RecentSalesTable({ books }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(books);

    // Function to handle changes in the search input
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        // Filter books based on the search query
        const filtered = books.filter(book =>
            book.BookName.toLowerCase().includes(query.toLowerCase()) ||
            book.Author.toLowerCase().includes(query.toLowerCase()) ||
            book.YearPublished.toString().includes(query) ||
            book.Publisher.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredBooks(filtered);
    };

    return (
        <div className = "search-container">
            
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder={` Search...`} // Using the Font Awesome search icon
                style={{
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='currentColor' d='${encodeURIComponent(
                        faSearch.icon[4]
                    )}'/></svg>")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left',
                    paddingLeft: '30px', // Adjust padding-left to ensure space for the icon
                    paddingRight: '10px' // Adjust padding-right to ensure space for the text
                }}
            />
            <table className='table table-borderless datatable'>
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Book Author</th>
                        <th scope="col">Year Published</th>
                        <th scope="col">Publisher</th>
                        <th scope="col">Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.map((book, index) => (
                        <tr key={index}>
                            <td>{book.BookName}</td>
                            <td>{book.Author}</td>
                            <td>{book.YearPublished}</td>
                            <td>{book.Publisher}</td>
                            <td>{book.Genre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RecentSalesTable;
