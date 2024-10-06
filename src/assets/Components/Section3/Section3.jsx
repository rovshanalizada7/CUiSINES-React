import React from 'react'
import "../Section3/section3.css"
import { TiTick } from "react-icons/ti";
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';


const Section3 = () => {


  return (
    <section className='section3'>

        <div className="section3-content">
            <div className="content">

            <span class="subheading">About Us</span>
            <h3 class="heading">About Cuisines</h3>
            <p class="mb-4">Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Quisquam ut, quis laborum tenetur 
                odit dolor quos minus in, ducimus quaerat repellendus 
                laudantium rem accusantium magni est. Error atque beatae 
                et quisquam facilis exercitationem vero tempore quos 
                aperiam, nostrum ducimus, pariatur.
            </p>
            <ul>
                <li><TiTick style={{color:"green"}} /> Quisquam facilis exercitationem vero</li>
                <li> <TiTick style={{color:"green"}} /> Aaperiam nostrum ducimus</li>
                <li><TiTick style={{color:"green"}}/> Lorem ipsum dolor sit amet</li>
                <li><TiTick style={{color:"green"}}/>  laudantium rem accusantium magni est</li>
            </ul>
            <div className='btn'>
                <a href="#" class="btn btn-primary mr-2">See Our Menu</a> 
            </div>

            </div>
        </div>

        <div className="section3-corusel">
            <Carousel>
        <Carousel.Item>
            <img src="https://preview.colorlib.com/theme/cuisines/images/hero_2.jpg" alt="" style={{backgroundPosition:"center",backgroundSize:"cover",height:"100%",width:"100%"}} />
        </Carousel.Item>
        <Carousel.Item>
            <img src="https://preview.colorlib.com/theme/cuisines/images/hero_1.jpg" style={{backgroundPosition:"center",backgroundSize:"cover",height:"100%",width:"100%"}} alt="" />
        </Carousel.Item>
        </Carousel>
        </div>

        <div className="bg-cover"></div>

    </section>
  )
}

export default Section3