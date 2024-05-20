import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BorrowBookForm({ userData }) {
    const [books, setBooks] = useState([]); 
    // State to hold the list of books
    const [BookName, setSelectedBook] = useState("");
    const [Genre, setGenre] = useState("");
    const [Name, setName] = useState(`${userData.fname} ${userData.lname}`);  
    const [College, setCollege] = useState(userData.college); 
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:5000/books") // Fetch list of books from backend
            .then(res => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch(err => console.log(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/borrow-create', { BookName, Name, Genre, College})
            .then(res => {
                console.log(res);
                navigate('/dashboard-main');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Borrow Book Form</h2>
                    <div className="mb-2">
    <label>Please Choose a Book</label>
    <select
        className="form-select"
        value={BookName}
        onChange={(e) => {
            setSelectedBook(e.target.value);
            setGenre(e.target.selectedOptions[0].getAttribute('data-genre'));
        }}
    >
        <option value="">Choose a Book</option>
        {books.map(book => (
            <option key={book._id} value={book.BookName} data-genre={book.Genre}>{book.BookName} - {book.Genre}</option>
        ))}
    </select>
</div>
                    <div className="mb-2">
                        <label>Select your name:</label>
                        <select
                            className="form-select"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                        >
                            <option value="">{userData.fname} {userData.lname}</option>
                        </select>
                    </div>
                    



                    <div className="mb-2">
                        <label>Select your college:</label>
                        <select
                            className="form-select"
                            value={College}
                            onChange={(e) => setCollege(e.target.value)}
                        >
                            <option value="">{userData.college}</option>
                        </select>
                    </div>
                    <button className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default BorrowBookForm;
