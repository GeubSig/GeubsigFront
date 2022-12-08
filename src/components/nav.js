import React, { useState } from 'react'
import { FaVideo } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [color, setColor] = useState(false)
  const clickChangeColor = (event) => {}
  return (
    <div className='Nav'>
      <h1>GeubSig</h1>
      <nav>
        <ul>
          <Link to={'/'}>
            <li>
              <FaVideo />
              <p>실시간 화면</p>
            </li>
          </Link>
          <Link to={'/dashbord'}>
            <li onClick={clickChangeColor}>
              <RiDashboardFill />
              <p>대시보드</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
