import {Link} from "react-router-dom";
import React from 'react';
import '../components/pageTitle.css';




function addBookPageTitle({page}) {
    
  return (
    <div className="pagetitle">
        <h1>Borrow a Book</h1>
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/dashboard-main">
                        <i className="bi bi-house-door"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active">{page}</li>
            </ol>
       
        </nav>
    </div>
  )
}

export default addBookPageTitle;