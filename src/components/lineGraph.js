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




const LineGraph = ({data}) => {

  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className='graph-con'>
    <Line  options={options} data={data} width='850px' height='800px' style={{display:'inline-block'}} />
    <div>
    <div className='date-picker'>
      <button>아침</button>
      <button>점심</button>
      <button>저녁</button>
    </div>
    </div>
    </div>
  )
}

export default LineGraph