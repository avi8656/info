import React from 'react'
import {Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className='container mt-5 mb-3 d-flex gap-5'>
     <Link  to="/" className=' text-decoration-none fs-5'>
        Home
     </Link>
     <Link to="/About" className=' text-decoration-none fs-5'>
        About
     </Link><Link to="/Profile" className='text-decoration-none fs-5'>
        Profile
     </Link>
    </div>
  )
}

export default Nav
