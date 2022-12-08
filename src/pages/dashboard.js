import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'

const Dashboard = () => {
  const data = {
    // labels 사용 안 함
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        data: [
          { x: 'January', y: 1 },
          { x: 'February', y: 2 },
          { x: 'March', y: 3 },
          { x: 'April', y: 4 },
          { x: 'May', y: 5 },
        ],
      },
    ],
  }
  const options = {
    // 옵션 (1)
    responsive: true,
    // 옵션 (2)
    interaction: {
      mode: 'index',
      intersect: false,
    },
    // 옵션 (3)
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          color: '#E3E3E3',
        },
      },
    },
  }
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)
  return (
    <div className='container' style={{ paddingRight: '30px' }}>
      <Line options={options} data={data} width='1500px' height='600px' />
      <div className='menu'>d</div>
    </div>
  )
}
export default Dashboard
