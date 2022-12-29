import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import LineGraph from '../components/lineGraph'

const Dashboard = () => {
  const [dateData, setDateData] = useState({
    breakfastDate: [],
    breakfastPeople: []
  })

  const [timeData, setTimeData] = useState({
    breakfast: [],
    lunch : [],
    dinner: []
  })

  const [hourData, setHourData] = useState({
    time:[],
    data:[]
  })

  let labels = dateData.breakfastDate;
  const data = {
    labels,
    datasets: [
      {
        label: '아침',
        data: dateData.breakfastPeople,
        borderColor: 'skyblue',
        backgroundColor: 'blue',
      },
      {
        label: '점심',
        data: dateData.lunchPeople,
        borderColor: 'pink',
        backgroundColor: 'blue',
      },
      {
        label: '저녁',
        data: dateData.dinnerPeople,
        borderColor: 'green',
        backgroundColor: 'blue',
      },
    ],
  };

  
  
  labels = ['5분', '10분', '15분', '20분', '25분', '30분', '35분', '40분', '45분', '50분', '55분', '60분'];
  const data2 = {
    labels,
    datasets: [
      {
        label: '아침',
        data: timeData.breakfast,
        borderColor: 'skyblue',
        backgroundColor: 'blue',
      },
      {
        label: '점심',
        data: timeData.lunch,
        borderColor: 'pink',
        backgroundColor: 'blue',
      },
      {
        label: '저녁',
        data: timeData.dinner,
        borderColor: 'green',
        backgroundColor: 'blue',
      },
    ],
  };

  useEffect(() => {
    const getDateData = async() => {
      const data = await axios.get("http://localhost:8000/days")

      setDateData(data.data)
    }

    const getTimeData = async () => {
      const data = await axios.get("http://localhost:8000/times")

      setTimeData(data.data)
    }

    const getHourData = async () => {
      const data = await axios.get("")

      setHourData(data.data)
    }
  
    getDateData()
    getTimeData()
    getHourData()
  }, [])
  
  return (
    <div className='container' style={{ paddingRight: '30px' }}>
      <div>
      <LineGraph title="일별 급식 인원 수" data={data} width="780px" height="500px" />
      <LineGraph title="시간별 급식 인원 수" data={data2} width="780px" height="500px" />
      </div>
      <LineGraph title="시간별 급식 인원 수" data={data2} width="1280px" height="400px" />
    </div>
  )
}
export default Dashboard
