import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>  
        
        <h1>Ableton</h1>
        <div className='row1'>
          <div className='box1'>
            <li>Register Live or Push </li>
            <li>About Ableton </li>
            <li>Jobs </li>
            <li>
              <img src="images/f1.jpeg" alt='1'/>
              <img src="images/f2.jpeg" alt='1'/>
              <img src="images/f3.jpeg" alt='1'/>
              <img src="images/f4.jpeg" alt='1'/>
              </li>
          </div>
          <div className='box2'>
            <strong><li>Education</li></strong>
            <li>Offer for students and teachers</li>
            <li>Ableton for the Classroom</li>
            <li>Ableton for College and Universities</li>
          </div>
          <div className='box3'>
          <strong><li>Sign up to our newsletter</li></strong>
            <li>Enter your email addres to stay up to date with the</li>
            <li>latest offers, tutorials, downloads, surveys and more.</li>
            <input placeholder='Enter Address'/>
            <button>Sign up</button>
          </div>
        </div>
        <div className='row2'>
        <div className='box1'>
          <strong><li>Community</li></strong>
            <li>Find Ableton User Groups</li>
            <li>Find Certified Training</li>
            <li>Become a Certified Trainer</li>
        </div>
          <div className='box2'>
          <strong><li>Distributors</li></strong>
            <li>Find Distributors</li>
            <li>Try Push in-store </li>
          </div>
          <div className='box3'>
          <strong><li>Language and Location</li></strong>
          <select>
            <option>English</option>
          </select>
          <select>
            <option>India</option>
          </select>
          </div>
        </div>

        <div className='end'>
          <div className='contact'>
            <ul>
              <li>Contact Us</li>
              <li>Press Resources</li>
              <li>Legal Info</li>
              <li>Privacy Policy</li>
              <li>Cookie Settings</li>
              <li>Imprint</li>
            </ul>
          </div>
          <div className='made'>
            <div>Made in Berlin</div>
            <div><img src='images/logo.jpeg' alt='1'/> </div>
            {/* <img src='images/logo.jpeg' alt='1'/> */}
          </div>
        </div>

    </>
  )
}

export default Footer