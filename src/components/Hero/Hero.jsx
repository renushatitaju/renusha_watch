import React from 'react'
import "./Hero.css"
import hurray from "../../assets/hurray.jpg"
import arrow from "../../assets/arrow.png"
import watches from "../../assets/watches.webp"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
<h2>
   Premium   Watches.    Direct to You ! </h2>
      
      <div className="hero-hand-icon">
        <p>New</p>
        <img src={hurray} alt="" height="50px"/>
        </div>  
        <p>Collections</p>
        <p>For everyone</p>

        <div className="hero-latest-btn">
    <div>Latest Collection</div>
    <img src={arrow} alt="" height="30px"/>
</div>
</div>


        <div className="hero-right">
            <img src={watches} alt="" height="400px" />
        </div>
    </div>
  )
}

export default Hero