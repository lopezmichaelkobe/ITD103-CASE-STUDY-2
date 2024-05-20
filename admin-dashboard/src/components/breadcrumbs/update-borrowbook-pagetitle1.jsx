import React from 'react';
import '../pageTitle.css';




function ManageAdminsPageTitle({page}) {
    
  return (
    <div className="pagetitle">
        <h1>Edit Borrowed Book Details</h1>
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/dashboard-main">
                        <i className="bi bi-house-door"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active">
                <a href="/update-borrowbook">
                    {page}
                </a>
                    </li>
                <li className="breadcrumb-item">
                    Edit Borrowed Book Details
                </li>
            </ol>
        </nav>
    </div>
  )
}

export default ManageAdminsPageTitle;