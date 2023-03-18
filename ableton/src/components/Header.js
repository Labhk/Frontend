import React from 'react';
import './Header.css';

function Header() {
  return (
    <>  

      <header class="site-header">
        <img class="logo" src='images/logo.jpeg' alt='logo'/>
        
        <nav class="site-nav">
          <ul>
            <li><a href="#0">Live</a></li>
            <li><a href="#0">Push</a></li>
            <li><a href="#0">Note</a></li>
            <li><a href="#0">Link</a></li>
            <li><a href="#0">Shops</a></li>
            <li><a href="#0">Packs</a></li>
            <li><a href="#0">Help</a></li>
            <li class="active"><a href="#0">More <strong>+</strong></a></li>
            <li class="live"><a href="#0">Try Live for free</a></li>
            <li class="login"><a href="#0">Log in or register</a></li>
            
          </ul>
        </nav>
      </header>
      <hr/>
      <div className='sub-header'>
        <ul>
            <li><a href="#0" style={{color:"#ff764d"}}>About</a></li>
            <li><a href="#0">Jobs</a></li>
            <li><a href="#0">Apprenticeships</a></li>
        </ul>
            
      </div>
    </>

  )
}

export default Header