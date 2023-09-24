'use client'
import { useEffect } from 'react';
import { Chart } from 'chart.js';
import React from 'react';
import { useRouter } from 'next/navigation';



function CarbonEmitted() {
  const router = useRouter()
  const emission = () => {
    ("/carbonChart")
  }
  useEffect(() => {
    const emissionChart = document.getElementById('myChart')!;
    const chartLine = emissionChart.getContext('2d');
    const myChart = new Chart(chartLine, {
      type: 'line',
      data: {
        labels: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December',
        ],
        datasets: [
          {
            data: [
              30000, 30000, 30000, 30000, 30000, 30000,
              30000, 30000, 30000, 30000, 30000, 30000,
            ],
            label: 'Emission Cap',
            borderColor: '#ff0000',
            backgroundColor: '#ff0000',
            fill: false,
          },
          {
            data: [
              13000, 22000, 20000, 11000, 46000, 21000,
              22000, 14000, 25000, 32000, 13000, 33000,
            ],
            label: 'Carbon Emitted',
            borderColor: '#3cba9f',
            backgroundColor: '#71d1bd',
            fill: false,
            lineTension: 0,
          },
        ],
      },
    });
  }, []);

  return (
    <>
     
      <h1 className="text-center  mx-auto mt-10 text-3xl font-semibold">
      Carbon emitted and carbon limit against time
      </h1>
      <div className="w-[1200px] h-[600px] flex mx-auto my-auto" >
        <div className="border pt-0  w-full h-fit my-auto shadow-xl mt-10">
          <canvas id="myChart" className="w-full h-full"></canvas>
        </div>
      </div>
    </>
  );
}

export default CarbonEmitted;
