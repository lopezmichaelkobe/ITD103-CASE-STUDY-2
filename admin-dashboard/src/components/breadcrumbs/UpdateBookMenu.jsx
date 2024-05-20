import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function UpdateBookMenu() {
    const { id } = useParams()

    const[BookName, setBookName] = useState()
    const[Author, setAuthor] = useState()
    const[YearPublished, setYearPublished] = useState()
    const[Publisher, setPublisher] = useState()
    const[Genre, setGenre] = useState()

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get("http://localhost:5000/get/" + id);
                    console.log(response);   
                    setBookName(response.data.BookName)
                    setAuthor(response.data.Author) 
                    setYearPublished(response.data.YearPublished)
                    setPublisher(response.data.Publisher)
                    setGenre(response.data.Genre)

                } catch (err){
                    console.log(err);   
                }
            }
            fetchData(); 
    }, [])

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
    axios.put('http://localhost:5000/update/' + id, {BookName, Author, YearPublished, Publisher, Genre})
        .then(res =>{
            console.log(res);
            navigate('/edit-book')
        })
        .catch(err => console.log(err))
    }


    return(
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Update Book Details</h2>
                    <div className="mb-2">
                        <label htmlFor="">Book Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            value = {BookName}
                            onChange={(e) => setBookName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Author</label>
                        <input
                            type="text"
                            placeholder="Enter Author"
                            className="form-control"
                            value = {Author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Year Published</label>
                        <input
                            type="text"
                            placeholder="Enter Publish Year"
                            className="form-control"
                            value = {YearPublished}
                            onChange={(e) => setYearPublished(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Publisher</label>
                        <input
                            type="text"
                            placeholder="Enter Publisher"
                            className="form-control"
                            value = {Publisher}
                            onChange={(e) => setPublisher(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
    <label htmlFor="genre">Genre</label>
    <select
        id="genre"
        className="form-select"
        value={Genre}
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

export default UpdateBookMenu;