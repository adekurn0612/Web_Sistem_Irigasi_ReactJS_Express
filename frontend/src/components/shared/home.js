// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js';

// const BarChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const data = {
//       labels: ['potasium', 'kelembapan', 'PH', 'Potasium', 'Kalium', 'Nitrogen'],
//       datasets: [
//         {
//           label: 'LAHAN',
//           data: [30, 15, 62, 65, 61, 55],
//           backgroundColor: 'rgba(54, 162, 235, 0.5)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 1,
//         },
//       ],
//     };

//     const options = {
//       scales: {
//         x: {
//           stacked: true,
//         },
//         y: {
//           stacked: true,
//         },
//       },
//     };

//     const ctx = chartRef.current.getContext('2d');

//     new Chart(ctx, {
//       type: 'bar',
//       data: data,
//       options: options,
//     });
//   }, []);

//   return <canvas ref={chartRef} />;
// };

// export default BarChart;
