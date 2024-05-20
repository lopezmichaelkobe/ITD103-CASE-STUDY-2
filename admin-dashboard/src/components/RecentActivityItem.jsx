import React from 'react';

function RecentActivityItem() {
  return (
    <div>
      <div className='activity-item d-flex'>
        <div className='activate-label'>32 min</div>
        <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
        <div className='activity-content'>Welcome to Alikabook! </div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Michael</a>
        </div>
      </div>
      <div className='activity-item d-flex'>
        <div className='activate-label'>60 min</div>
        <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
        <div className='activity-content'>Welcome to Alikabook! </div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Aldous</a>
        </div>
      </div>
      <div className='activity-item d-flex'>
        <div className='activate-label'>60 min</div>
        <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
        <div className='activity-content'>Welcome to Alikabook! </div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Karina</a>
        </div>
      </div>
      <div className='activity-item d-flex'>
        <div className='activate-label'>60 min</div>
        <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
        <div className='activity-content'>Welcome to Alikabook!</div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Layla</a>
        </div>
      </div>
      <div className='activity-item d-flex'>
        <div className='activate-label'>60 min</div>
        <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
        <div className='activity-content'>Welcome to Alikabook!</div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Franco</a>
        </div>
      </div> 
      <div className='activity-item d-flex'>
        <div className='activate-label'>60 min</div>
        <i className='bi bi-circle-fill activity-badge text-dark align-self-start'></i>
        <div className='activity-content'>Welcome to Alikabook! </div>
        <div className='activity-content'>
            <a href="#" className='fw-bold text-dark'>Alucard</a>
        </div>
      </div> 
    </div>
  );
}

export default RecentActivityItem;