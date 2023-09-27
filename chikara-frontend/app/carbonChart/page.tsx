'use client'
import { useEffect } from 'react';
import { Chart } from 'chart.js';
import React from 'react';


function CarbonAvoided() {
 
  useEffect(() => {
    const carbonChart = document.getElementById('myChart2')!;
    const chartLine = carbonChart.getContext('2d');
    const myChart2 = new Chart(chartLine, {
      type: 'line',
      data: {
        labels: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December',
        ],
        datasets: [
          {
            data: [
              13000, 15000, 17000, 11000, 46000, 16000,
              17000, 14000, 17000, 31000, 13000, 33000,
            ],
            label: 'Carbon Avoided',
            borderColor: '#1BEF0B',
            backgroundColor: '#1BEF0B',
            fill: false,
            lineTension: 0,
          },
          {
            data: [
              13000, 15000, 20000, 11000, 46000, 19000,
              19000, 14000, 17000, 31000, 13000, 32000,
            ],
            label: 'Carbon credits earned',
            borderColor: '#8A23E3',
            backgroundColor: '#8A23E3',
            fill: false,
            lineTension: 0,
          },
        ],
      },
    });
  }, []);

  return (
    <>
     
      <h1 className="text-center mt-24  mx-auto  text-3xl font-semibold">
      Carbon avoided and carbon credit against time
      </h1>
      <div className="w-[1200px] h-[600px] flex mx-auto my-auto" >
        <div className="border pt-0  w-full h-fit my-auto shadow-xl mt-10" style={{marginLeft: '80px', marginTop: '40px' }}>
          <canvas id="myChart2" className="w-full h-full"></canvas>
        </div>
      </div>
    </>
  );
}

export default CarbonAvoided;
