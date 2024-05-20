import React from 'react';
import './card.css';

function Card({ sensordata, temp, hm }) {
    // Assuming sensordata is an array of sensor data objects
    const recentSensorData = sensordata.length > 0 ? sensordata[sensordata.length - 1] : null;
    // Assuming temp and hm are objects with temperature and humidity properties respectively
    const recentTemperature = recentSensorData ? recentSensorData.temperature : 'N/A';
    const recentHumidity = recentSensorData ? recentSensorData.humidity : 'N/A';

    return (
        <div className='row'>
            <div className='col-xxl-4 col-md-6'>
                <div className='card info-card sales-card'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            Total Sensor Data:
                        </h5>
                        <div className='d-flex align-items-center'>
                            <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                                <i className='bi bi-book'></i>
                            </div>
                            <div className='ps-3'>
                                <h6>{sensordata.length}</h6>
                                <span className='text-success small pt-1 fw-bold'>20%</span>
                                <span className='text-muted small pt-2 ps-1'>Increase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6'>
                <div className='card info-card sales-card'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            Recent Temperature
                        </h5>
                        <div className='d-flex align-items-center'>
                            <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                                <i className="bi bi-person"></i>
                            </div>
                            <div className='ps-3'>
                                <h6>{recentTemperature}°C</h6>
                                <span className='text-success small pt-1 fw-bold'>3</span>
                                <span className='text-muted small pt-2 ps-1'>Users Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-xxl-4 col-md-6'>
                <div className='card info-card sales-card'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            Recent Humidity
                        </h5>
                        <div className='d-flex align-items-center'>
                            <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                                <i className="bi bi-person-fill"></i>
                            </div>
                            <div className='ps-3'>
                                <h6>{recentHumidity}%</h6>
                                <span className='text-success small pt-1 fw-bold'>104</span>
                                <span className='text-muted small pt-2 ps-1'>Users Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
