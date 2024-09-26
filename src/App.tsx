import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import React from 'react'


function App() {

  return (
    <>
      <Navbar />

      <div style={{ marginTop: 70 }}>
        <Outlet />
      </div>
    </>
  )
}

export default App
