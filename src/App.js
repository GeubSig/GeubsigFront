import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import Main from './pages/main'
import Dashborad from './pages/dashborad'

import './style/menubar.css'
import './style/main.css'
import './style/dashboard.css'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/dashbord' element={<Dashborad />} />
      </Routes>
    </>
  )
}

export default App
