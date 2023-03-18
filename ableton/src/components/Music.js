import React from 'react';
import './Music.css'

function Music() {
  return (
    <>
        <div className='music'>
          <img className='img1' src='images/music.jpeg' alt='2'/>
          <img className='img2' src='https://ableton-production.imgix.net/about/photo-2.jpg?fit=crop' alt='2'/>
        </div>
        <div className='it' align="center">
        <div className='text'>
        Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.
        </div>
        <div className='sub-text'>
        We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
        </div>
        </div>
        
    </>
  )
}

export default Music