import React from 'react'
import LineGraph from '../components/lineGraph'

const Dashboard = () => {

  let labels = ['11/19', '11/20', '11/30', '12/1', '12/2', '12/3', '12/4'];
  const data = {
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

  labels = ['5분', '10분', '15분', '20분', '25분', '30분', '35분', '40분', '45분', '50분', '55분', '60분'];
  const data2 = {
    labels,
    datasets: [
      {
        label: '시간별 급식 인원 수',
        data: [1,2,3,4,5,6,7,8,9,10,11,12],
        borderColor: 'skyblue',
        backgroundColor: 'blue',
      }
    ],
  };
  
  return (
    <div className='container' style={{ paddingRight: '30px' }}>
      <LineGraph title="일별 급식 인원 수" data={data} />
      <LineGraph title="시간별 급식 인원 수" data={data2} />
    </div>
  )
}
export default Dashboard
