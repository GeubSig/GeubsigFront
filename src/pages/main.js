import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import cctv from '../asset/cctv2.png'
import "../style/slick.css";
import Slider from 'react-slick';


const Main = () => {
  const [people, setPeople] = useState('#')
  const [delayTime, setDelayTime] = useState('#')
  const [menu, setMenu] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 50
  };

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
  
    getMenu()
  }, [])


  return (
    <div className='container'>
      <div className='f_layout'>
        <Slider {...settings}>
          <div>
            <img className='Img' alt='cctv' src={cctv} width="1400px" />
          </div>
          <div>
            <img className='Img' alt='cctv' src={cctv} width="1400px" />
          </div>
        </Slider>
      </div>
      <div className='s_layout'>
        <div className='menu'>
          <p className='title'>1. 예상 대기시간</p>
          <p className='info'>{delayTime} 분</p>
        </div>
        <div className='menu'>
          <p className='title'>2. 현재 급식실 내 인원</p>
          <p className='info'>{people} 명</p>
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
