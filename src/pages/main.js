import React, { useState } from 'react'
import cctv from '../asset/cctv2.png'

const Main = () => {
  const [people, setPeople] = useState(3)
  return (
    <div className='container'>
      <div className='f_layout'>
        <img className='Img' alt='cctv' src={cctv} />
      </div>
      <div className='s_layout'>
        <div className='menu'>
          <p className='title'>1. 예상 대기시간</p>
          <p>0 분</p>
        </div>
        <div className='menu'>
          <p className='title'>2. 현재 급식실 내 인원</p>
          <p>{people} 명</p>
        </div>
        <div className='menu'>
          <p className='title'>3. 급식 메뉴</p>
          <ul>
            <li>쇠고기콩나물밥/양념장</li>
            <li>초코타르트(행운)</li>
            <li>들개무채국</li>
            <li>해물콩나물찜</li>
            <li>달걀말이</li>
            <li>배추김치</li>
            <li>단감</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Main
