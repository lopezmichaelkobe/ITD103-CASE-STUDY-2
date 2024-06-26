import React from 'react';
import './pageTitle.css';

function PageTitle({page}) {
  return (
    <div className="pagetitle">
        <h1>Sensor Dashboard</h1>
        <nav>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/userDetails">
                        <i className="bi bi-house-door"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active">{page}</li>
            </ol>
        </nav>
    </div>
  )
}

export default PageTitle