import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>AziziTravel</h1>
          <p>This is our page details. You can find some additional information.</p>
        </div>
        <div className='social-media'>
          <a href='/'>
            <i className='fa-brands fa-facebook-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-instagram-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-behance-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-snapchat-square'></i>
          </a>
        </div>
      </div>

      <div className='bottom'>
        <div>
            <h4>Project</h4>
            <a href='/'>ChangeLog</a>
            <a href='/'>Status</a>
            <a href='/'>License</a>
            <a href='/'>All Versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href='/'>GitHub</a>
            <a href='/'>Issues</a>
            <a href='/'>Project</a>
            <a href='/'>Twitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href='/'>ChangeLog</a>
            <a href='/'>Status</a>
            <a href='/'>License</a>
            <a href='/'>All Versions</a>
        </div>
        <div>
            <h4>Others</h4>
            <a href='/'>ChangeLog</a>
            <a href='/'>Status</a>
            <a href='/'>License</a>
            <a href='/'>All Versions</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
