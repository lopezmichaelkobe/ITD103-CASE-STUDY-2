import React, { useState, useEffect } from 'react';

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [{ name: 'Humidity', data: [] }],
    options: {
      chart: { height: 350, type: 'area' },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      xaxis: { type: 'datetime', categories: [] },
      tooltip: { x: { format: 'dd/MM/yy HH:mm' } },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/sensordata_hmsample');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        console.log('Fetched data:', data);

        const humidityData = data.map(entry => ({
          x: new Date(entry.timestamp).getTime(),
          y: parseFloat(entry.humidity)
        }));

        const categories = data.map(entry => new Date(entry.timestamp).toISOString());

        console.log('Humidity data:', humidityData);
        console.log('Categories:', categories);

        setChartData(prevState => ({
          series: [{ ...prevState.series[0], data: humidityData }],
          options: { ...prevState.options, xaxis: { ...prevState.options.xaxis, categories: categories } }
        }));
      } catch (error) {
        console.error('Error fetching humidity data:', error);
      }
    };

    fetchData();
  }, []);

  return null; // This will not render anything
};

export default ApexChart;
