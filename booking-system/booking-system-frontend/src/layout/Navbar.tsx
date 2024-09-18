import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>     
      <nav className="navbar navbar-expand-lg navbar-dark py-4 bg-purple">
        <div className="container-fluid justify-content-center ">

          <Link className='navbar-brand d-flex align-items-center'
          to='/'>
          <img src="/logo.png" alt="Logo" style={{ width: '70px', marginRight: '5px' }} />
          <h4 style={{ margin: 0 }}>Community Health Center Appointment Booking System</h4>  </Link>

        </div>
      </nav>
    </div>
  )
}
