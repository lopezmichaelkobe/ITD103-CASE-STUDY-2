import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function ReportChartsTemp() {
  const [data, setData] = useState({
    series: [],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ['#FF5733'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      xaxis: {
        type: 'datetime',
        categories: [],
      },
      yaxis: {
        forceNiceScale: false, // Disable automatic scaling with decimal points
      },
      tooltip: {
        x: {
          format: 'dd/MM/yyyy hh:mm TT',
        },
      },
    },
  });


  useEffect(() => {
    fetch("http://localhost:5000/sensordata_temp")
      .then(res => res.json())
      .then(sensorData => {

        
        const convertToPST = timestamp => {
          // Convert London time to Philippine Standard Time
          const londonTime = new Date(timestamp);
          const pstTime = new Date(londonTime.getTime() + (8 * 60 * 60 * 1000)); // Add 8 hours (28800000 milliseconds) to convert from London time to PST
          return pstTime;
        };

        const temperatureSeries = sensorData.map(item => [convertToPST(item.timestamp), parseFloat(item.temperature)]);
  
        console.log("Sensor Data:", sensorData);
        
        setData(prevData => ({
          ...prevData,
          series: [{ name: 'Temperature', data: temperatureSeries }],
          options: {
            ...prevData.options,
            xaxis: {
              ...prevData.options.xaxis,
              categories: sensorData.map(item => {
                const pstTime = convertToPST(item._id); // Adjust using _id instead of timestamp
                console.log("Original Time:", new Date(item.timestamp));
                console.log("PST Time:", pstTime);
                
                let hours = pstTime.getHours();
                const minutes = pstTime.getMinutes() < 10 ? '0' + pstTime.getMinutes() : pstTime.getMinutes();
                const ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12 || 12; // Convert hours to 12-hour format
                return `${hours}:${minutes} ${ampm}`;
              })
            }
          }
        }));
      })
      .catch(err => console.log(err));
  }, []);
  
  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    />
  );
}

export default ReportChartsTemp;
