import React from 'react'
import "../Section1/section1.css"

const Section1 = () => {

  return (
    <section className='section1'>

        <div className="background"></div>

        <div className="section1-img"></div>

        <div className="section1-content">
            <h1 class="heading">You don't need a silver fork to eat good food.</h1>
            <div className="btns">
                <a href="#" class="btn1">See Our Menu</a>
                <a href="#" class="btn2">Special Offers</a>
            </div>
        </div>
        
    </section>
  )
}

export default Section1