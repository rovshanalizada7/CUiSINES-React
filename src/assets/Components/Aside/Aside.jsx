import React from 'react'
import "../Aside/aside.css"

const Aside = () => {

  return (
    <aside>

    <div className="logo">
        <img src="https://preview.colorlib.com/theme/cuisines/images/logo.svg" alt="" />
    </div>

    <nav>
        <ul>
            <li>
                <a href="">ABOUT US</a>
            </li>
            <li>
                <a href="">OUR MENU</a>
            </li>
            <li>
                <a href="">SPECIAL OFFERS</a>
            </li>
            <li>
                <a href="">GALLERY</a>
            </li>
            <li>
                <a href="">CONTACT US</a>
            </li>
        </ul>
    </nav>

    <div className="contact">
        <span class="caption">Book A Table</span>
        <a href="#" class="phone-number">+91-8010200777</a>
        <span class="open">Mon - Sun, 8:00AM - 11:00PM</span>
    </div>

    </aside>
  )
}

export default Aside