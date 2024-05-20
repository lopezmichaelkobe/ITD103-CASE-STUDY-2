import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {

    const [BookName, setBookName] = useState()
    const [Author, setAuthor] = useState()
    const [YearPublished, setYearPublished] = useState()
    const [Publisher, setPublisher] = useState()
    const [Genre, setGenre] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/create-book', {BookName, Author, YearPublished, Publisher, Genre})
        .then(res =>{
            console.log(res);
            navigate('/dashboard-main');
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Book</h2>
                    <div className="mb-2">
                        <label htmlFor="">Book Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            onChange={(e) => setBookName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Author</label>
                        <input
                            type="text"
                            placeholder="Enter Author"
                            className="form-control"
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Year Published</label>
                        <input
                            type="text"
                            placeholder="Enter Publish Year"
                            className="form-control"
                            onChange={(e) => setYearPublished(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Publisher</label>
                        <input
                            type="text"
                            placeholder="Enter Publisher"
                            className="form-control"
                            onChange={(e) => setPublisher(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                 <label htmlFor="">Genre</label>
                <select
                    className="form-select"
                    onChange={(e) => setGenre(e.target.value)}
                >       
                    <option value="">Choose a Genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Reference">Reference</option>
                </select>
                </div>
                    <button className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;