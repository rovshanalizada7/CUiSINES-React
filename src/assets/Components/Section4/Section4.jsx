import React from 'react'
import "../Section4/section4.css"
import Carousel from 'react-bootstrap/Carousel';


const Section4 = () => {
  return (
    <section className='section4' >
    <div className="section4-content">

        <div className="text-center">
        <span class="subheading">Testimonials</span>
        <h3 class="heading">Happy Customers</h3>
        </div>

     <div className="text-center testimonials">
     <Carousel>
      <Carousel.Item>
        <img src="https://preview.colorlib.com/theme/cuisines/images/person_sq_1.jpg" alt="" />
        <Carousel.Caption>
        <p style={{width:"500px"}}>
            P“Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quisquam ut, quis laborum tenetur odit dolor quos minus in, 
            ducimus quaerat repellendus laudantium rem accusantium magni est.”
          </p>
          <span class="d-block font-weight-bold">Sheena Smith</span>
          <span class="position">Customer</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://preview.colorlib.com/theme/cuisines/images/person_sq_2.jpg" alt="" />
        <Carousel.Caption>
        <p style={{width:"500px"}}>
            P“Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quisquam ut, quis laborum tenetur odit dolor quos minus in, 
            ducimus quaerat repellendus laudantium rem accusantium magni est.”
          </p>
          <span class="d-block font-weight-bold">Ben Miller</span>
          <span class="position">Customer</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://preview.colorlib.com/theme/cuisines/images/person_sq_1.jpg" alt="" />
        <Carousel.Caption>
          <p style={{width:"500px"}}>
            P“Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quisquam ut, quis laborum tenetur odit dolor quos minus in, 
            ducimus quaerat repellendus laudantium rem accusantium magni est.”
          </p>
          <span class="d-block font-weight-bold">Sheena Smith</span>
          <span class="position">Customer</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     </div>

    </div>
    </section >
  )
}

export default Section4