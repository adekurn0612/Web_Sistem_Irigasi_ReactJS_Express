import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const MyChart = ({ xValues, yValues }) => {
  const chartRef = useRef(null);

  // console.log(xValues);

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: 'rgb(150,150,255)',
            borderColor: 'rgb(75, 192, 192)',
            data: yValues,
          },
        ],
      },
      options: { /* Add your options here */ },
    });

    // Clean up the chart when the component is unmounted
    return () => {
      myChart.destroy();
    };
  }, [xValues, yValues]); // Add xValues and yValues to the dependency array

  return <canvas ref={chartRef} id="myChart" />;
};

export default MyChart;
