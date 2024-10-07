import React from 'react'
import Aside from '../Aside/Aside'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Footer from '../Footer/Footer'
import "../HomePage/homePage.css"

const HomePage = () => {
  return (
    <div className='homePage'>
      <div style={{width:"18%"}}>
      <Aside/>
      </div>
      <div style={{width:"82%"}}>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
      </div>
    </div>
  )
}

export default HomePage