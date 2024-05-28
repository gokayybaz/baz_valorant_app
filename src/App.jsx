import React from 'react'

import Agents from './screens/agents'
import HomeScreen from './screens/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
      <nav className='flex items-center justify-center p-12 bg-slate-100'>
        <img width={85} className='mr-2' src="https://1000logos.net/wp-content/uploads/2022/09/Valorant-Emblem.png" alt="" />
        <h1 className='text-3xl font-bold'>Baz Valorant Rehberi</h1>
      </nav>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<HomeScreen />} path="/" />
          <Route element={<Agents />} path="/agents" />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App