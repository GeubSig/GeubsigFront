import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import cctv from '../asset/cctv2.png'
import "../style/slick.css";
import Slider from 'react-slick';


const Main = () => {
  const [people, setPeople] = useState({
    currentPeople: '#',
    waitingTime: '#'
  })
  const [menu, setMenu] = useState([])
  const [cctv, setCctv] = useState(0)
  const cctvArry = ["http://localhost:8000/video_feed1", "http://localhost:8000/video_feed2"]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 50
  };


  
  
  useEffect(() => {
    
    const getMenu = async() => {
      const menu = await axios.get("https://scmeal.ml/경북소")

      const hour = new Date().getHours
      if (hour < 9 || hour >= 20) //9시 전 또는 20시 후
        setMenu(menu.data.breakfast)
      else if (hour < 13 || hour >= 9) // 13시 이전 또는 21시후
        setMenu(menu.data.lunch)
      else // 그 외
        setMenu(menu.data.dinner)
    }
    const getPeople = async() => {
      const data = await axios.get("http://localhost:8000/current_people")
  
      setPeople(data.data)
    }
    
  
    getMenu()
    getPeople()
  }, [])

  const useInterval = (callback, delay) => {
    const savedCallback = useRef(null)

    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    useEffect(() => {
      const executeCallback = () => {
        savedCallback.current()
      }

      const id = setInterval(executeCallback, delay)

      return () => clearInterval(id)
    }, [])
  }


  const getPeople = async() => {
    const data = await axios.get("http://localhost:8000/current_people")

    setPeople(data.data)
  }

  useInterval(getPeople, 5000)
  const changeCctv = () => {
    setCctv(!cctv)
  }

  const enable = {display:'none'}
  const disable = {display:'block'}

  return (
    <div className='container'>
      <div className='f_layout'>
          
          <div style={cctv ? enable : disable}>
            {/* <img className='Img' alt='cctv' src={cctvArry[0]} width="1280px" style={{filter:'blur(4px)'}} /> */}
            <img className='Img' alt='cctv' src={cctvArry[0]} width="1280px" />
          </div>
          
          <div style={cctv? disable : enable}>
            {/* <img className='Img' alt='cctv' src={cctvArry[1]} width="1280px" style={{filter:'blur(4px)'}} /> */}
            <img className='Img' alt='cctv' src={cctvArry[1]} width="1280px" />
          </div>
          
        <div><button onClick={changeCctv}>CCTV1</button><button onClick={changeCctv}>CCTV2</button></div>
      </div>
      <div className='s_layout'>
        <div className='menu'>
          <p className='title'>1. 예상 대기시간</p>
          <p className='info'>{people.waitingTime} 분</p>
        </div>
        <div className='menu'>
          <p className='title'>2. 현재 급식실 내 인원</p>
          <p className='info'>{people.currentPeople} 명</p>
        </div>
        <div className='menu'>
          <p className='title'>3. 급식 메뉴</p>
          <ul>
            {
              menu.map((item, index) => <li key={index}>{item}</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Main
