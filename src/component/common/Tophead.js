import React from 'react'
import Topbar from './Topbar'
import './Tophead.css'

const Tophead = () => {
  return (
    <>
    <Topbar/>
    <header>
        <nav className="flexB">
            <ul className='flexB'>
                <li>Home</li>
                <li>All Courses</li>
                <li>Team</li>
                <li>Contact </li>
                <li>Journal</li>
                <li>Pricing</li>
                <li>About</li>
            </ul>
            <div className="certificates">
                <div className="button">GET CERTIFICATE</div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Tophead;