import {Link} from "react-router-dom";
import React from 'react';
import '../pageTitle.css';




function addBookPageTitle({page}) {
    
  return (
    <div className="pagetitle">
        <h1>Add Book Details</h1>
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/userDetails">
                        <i className="bi bi-house-door"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active"><Link to="/book-lists">{page}</Link></li>
                <li className="breadcrumb-item">
                    Add Book Details
                </li>
            </ol>
       
        </nav>
    </div>
  )
}

export default addBookPageTitle;