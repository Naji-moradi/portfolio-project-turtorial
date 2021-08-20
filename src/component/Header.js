import React from 'react'
import Typed from 'react-typed'

const Header = () => {
   return (
      <>
      <div className="header_wrapper">
         <div className="main_info">
            <h2>best web development campany!</h2>
            <Typed 
            className = "typed-text"
            strings = {["Web Design","Web Development","Facebook Ads SMS","Google Ads"]}
            typeSpeed ={40}
            backSpeed={60}
            loop
            />
            <a href="/" className = "btn-main-offer" >Contact me </a>
         </div>
      </div>
         
      </>
   )
}

export default Header
