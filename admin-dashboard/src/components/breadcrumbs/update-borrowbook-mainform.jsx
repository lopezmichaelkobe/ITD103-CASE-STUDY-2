import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function UpdateUserMenu() {
    const { id } = useParams()

    const[BookName, setBookName] = useState()
    const[Genre, setGenre] = useState()
    const[Name, setName] = useState()
    const[College, setCollege] = useState()

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get("http://localhost:5000/getborrow-books/" + id);
                    console.log(response);   
                    setBookName(response.data.BookName)
                    setGenre(response.data.Genre) 
                    setName(response.data.Name)
                    setCollege(response.data.College)

                } catch (err){
                    console.log(err);   
                }
            }
            fetchData(); 
    }, [])

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
    axios.put('http://localhost:5000/update-borrowbooks/' + id, {BookName, Genre, Name, College})
        .then(res =>{
            console.log(res);
            navigate('/update-borrowbook')
        })
        .catch(err => console.log(err))
    }


    return(
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleUpdate}>
                    <h2>Update User Details</h2>
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
                        <label htmlFor="">Genre</label>
                        <input
                            type="text"
                            placeholder="Enter Author"
                            className="form-control"
                            value = {Genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Publish Year"
                            className="form-control"
                            value = {Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
            <label htmlFor="college">College</label>
            <select
                    id="college"
                    className="form-select"
                    value={College}
                    onChange={(e) => setCollege(e.target.value)}
            >
            <option value="">Choose a College</option>
            <option value="CASS">CASS</option>
            <option value="CCS">CCS</option>
            <option value="CEBA">CEBA</option>
            <option value="CED">CED</option>
            <option value="COE">COE</option>
            <option value="CON">CON</option>
            <option value="CSM">CSM</option>
            </select>
            </div>
                    <button className="btn btn-outline-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUserMenu;