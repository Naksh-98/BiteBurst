import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <nav className="navbar">
          <ul className="nav">
            <li><Link to={'/Home'} className="nav-link">Home</Link></li>
            <li><Link to={'/Features'} className="nav-link">Features</Link></li>
            <li><Link to={'/Services'} className="nav-link">Services</Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/DownloadMobile'} className="nav-link">DownloadMobile</Link></li>
            <li><Link to={'/FAQs'} className="nav-link">FAQs</Link></li>
          </ul>
        </nav>
    </>

  )
}

export default Header;
