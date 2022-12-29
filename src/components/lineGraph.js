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
import { useState } from 'react';
import { useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




const LineGraph = ({data, title, width, height}) => {

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

  const [graphData, setGraphData] = useState(data)

  useEffect(() => {
    setGraphData(data)
  }, [data])
  return (
    <div className='graph-con'>
    <Line  options={options} data={graphData} width={width} height={height} style={{display:'inline-block'}} />
    <div>
    <div className='date-picker'>
      <p>{title}</p>
    </div>
    </div>
    </div>
  )
}

export default LineGraph