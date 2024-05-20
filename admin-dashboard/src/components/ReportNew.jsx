import React, { useState } from 'react';
import CardFilter from './CardFilter';
import ReportChartsTemp from './ReportChartsTemp';
function Reports() {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    }
  return (
    <div className='card'>
        <CardFilter filterChange ={handleFilterChange}/>
        <div className='card-body'>
            <h5 className='card-title'>
                Sensor Data By Temperature: <span>/{filter}</span>
            </h5>
        <ReportChartsTemp/>
        </div>
    </div>
  );
}

export default Reports;