import {Link} from "react-router-dom";
import React from 'react';
import './pageTitle.css';




function bookListsPageTitle({page}) {
    
  return (
    <div className="pagetitle">
        <h1>Book Lists</h1>
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/dashboard-main">
                        <i className="bi bi-house-door"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active">{page}</li>
            </ol>
            <Link to={'./create-book-main'} className="btn btn-outline-success mx-2">Add Book</Link>
        </nav>
    </div>
  )
}

export default bookListsPageTitle;