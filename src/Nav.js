import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show,handleShow]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",() =>{
            if(window.scrollY>100)
            {
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        })
    })

  return (
    <div className={`Nav ${show && 'Nav_black'}`}>
        <img
        className='Nav_logo'
        src="http://culturaddict.com/wp-content/uploads/2017/10/Netflix-Logo.png"
        alt="Netflix Logo" 
        />
        <div className='Nav_text'>
        <p className='text'>Home</p>
        <p className='text'>TvShows</p>
        <p className='text'>Movies</p>
        <p className='text'>New&Popular</p>
        <p className='text'>My List</p>
        </div>
        
        <img
        className='Nav_avatar'
        src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
        alt="Profile Icon" 
        />
    </div>
  )
}

export default Nav