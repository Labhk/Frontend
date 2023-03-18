import React from 'react';
import './Video.css'

function Video() {
  return (
    <>
      <div className='video' align='center'>
        <img src='https://ableton-production.imgix.net/about/poster-juanpe.jpg' alt='3'/>
        <img src='images/play.png' alt='3'/>
        
      </div>
      <div className='para' align="center" >
      <p>Why Ableton - Juanpe Bolivar</p>
      <div className='text'>
      We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
        </div>
        <div className='sub-text'>
        Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
        </div>
      </div>

      <div className='green'>
        <div className='list'>
          <img src='images/q1.jpeg' alt='1'/>
          <img src='images/q2.jpeg' alt='1'/>
        </div>
        <img src='images/q3.jpeg' alt='3'/>

      </div>
      
      <div className='para' align="center" style={{paddingTop:"100px"}}>
      <div className='text'>
      We're passionate about what we do, but we're equally passionate about improving who we are.
        </div>
        <div className='sub-text' style={{paddingBottom:"10px"}}>
        We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
        </div>
        <div className='sub-text'style={{paddingBottom:"150px"}}>
        Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
        </div>
      </div>

      <div className='purple'>
        <img src='images/p1.jpeg' alt='1'/>
        <img src='images/p2.jpeg' alt='1'/>
      </div>

      <div className='para' align="center" style={{paddingTop:"100px"}}>
      <div className='text'>
      We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.  </div>
        <div className='sub-text' style={{paddingBottom:"150px"}}>
        If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
        </div>
      </div>


      <div className='blue'>
        <img src='images/b1.jpeg' alt='1'/>
        <div className='btext'>
          <p>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</p>
          <a href="#0">See latest jobs &gt;</a>
        </div>
      </div>

      <hr style={{marginTop:"150px"}}/>
    </>
  )
}

export default Video