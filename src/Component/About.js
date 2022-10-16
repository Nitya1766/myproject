import React from 'react'
import {NavLink} from 'react-router-dom';
const About = () => {
  return (
    <div className='About'>
      <h1 className='welcome'>Welcome to About page</h1>
     <div className='about-para'>
       <img className='img' src='./Image/photo.avif'alt='jpg'/>
       <div>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p><br/>

        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>

        <NavLink to="/home"><p className='back-home'>Back to home page</p></NavLink>
     </div>
    </div>

  </div>
  )
}
export default About;
