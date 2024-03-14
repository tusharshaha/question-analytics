'use client';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      let chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: data.datasets
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          indexAxis: 'y',
          scales: {
            x: {
              display: false,
              grid: {
                display: false
              }
            },
            y: {
              grid: {
                display: false
              }
            }
          }
        }
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;