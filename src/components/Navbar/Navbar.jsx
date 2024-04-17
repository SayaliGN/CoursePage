import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <li>Call us on :</li>
            <li>9999999999</li>
        </ul>
        <ul>
            <li>Mail us on :</li>
            <li>example@info.com</li>
        </ul>
        <div className='search-box'>
        <input type="text" placeholder='Search'/>
        </div>
    </div>
  )
}

export default Navbar