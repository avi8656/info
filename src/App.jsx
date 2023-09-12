import React from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Profile from './components/Profile'
import Details from './components/Details'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'

const App = () => {
  return (
    <div>
      <Nav />
      <hr />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Profile/:id" element={<Details/>} />

      </Routes>
    </div>
  )
}

export default App
