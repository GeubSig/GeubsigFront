import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: '일별 급식 인원 수',
    },
  },
};

const labels = ['11/19', '11/20', '11/30', '12/1', '12/2', '12/3', '12/4'];

export const data = {
  labels,
  datasets: [
    {
      label: '일별 급식 인원 수',
      data: [1,2,3,4,5,6,7],
      borderColor: 'skyblue',
      backgroundColor: 'blue',
    }
  ],
};

const LineGraph = () => {
  return <Line  options={options} data={data} width='850px' height='800px' style={{display:'inline-block'}} />;
}

export default LineGraph