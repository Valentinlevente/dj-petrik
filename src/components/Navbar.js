import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><Link className="linkItem" to="/">Főoldal</Link></li>
        <li><Link className="linkItem" to="/tapasztalat">Tapasztalat</Link></li>
        <li><Link className="linkItem" to="/idopont">Idopont</Link></li>
      </ul>
    </div>
  )
}

export default Navbar