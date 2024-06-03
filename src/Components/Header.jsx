import React from 'react'
// import {Link} from 'react-router-dom';
import '../Components/Css/Header.css'
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <ul className='nav'>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Features">Features</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Contact">Contact</a></li>
          <li><a href="#DownloadMobile">Download Mobile</a></li>
          <li><a href="#FAQs">FAQs</a></li>
        </ul>
      </nav>
    </>

  )
}

//             <li><Link to={'/Home'} className="nav-link">Home</Link></li>
//             <li><Link to={'/About'} className="nav-link">About</Link></li>
//             <li><Link to={'/Features'} className="nav-link">Features</Link></li>
//             <li><Link to={'/Services'} className="nav-link">Services</Link></li>
//             <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
//             <li><Link to={'/DownloadMobile'} className="nav-link">DownloadMobile</Link></li>
//             <li><Link to={'/FAQs'} className="nav-link">FAQs</Link></li>
export default Header;
