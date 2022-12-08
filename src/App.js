import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import Main from './pages/main'
import Dashboard from './pages/dashboard'

import './style/menubar.css'
import './style/main.css'
import './style/dashboard.css'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/dashbord' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
