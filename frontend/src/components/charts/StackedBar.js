'use client';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StackedBarChart = ({ data }) => {
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
              position: 'right'
            }
          },
          indexAxis: 'y',
          scales: {
            x: {
              display: false,
              grid: {
                display: false
              },
              stacked: true
            },
            y: {
              grid: {
                display: false
              },
              stacked: true
            }
          },
          elements: {
            rectangle: {
              borderWidth: 1, 
              borderSkipped: false, 
              borderRadius: {
                topLeft: 10,
                topRight: 10,
                borderBottomLeft: 10,
                borderBottomRight: 10
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

export default StackedBarChart;