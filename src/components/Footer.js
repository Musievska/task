import React from 'react';
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
        <Link className="footer-links" to={'/'}>Home</Link>
        <Link className="footer-links" to={'/details'}>Details</Link>
      <div className='navTitle'>The Building App</div>
    </footer>
  )
}

export default Footer;