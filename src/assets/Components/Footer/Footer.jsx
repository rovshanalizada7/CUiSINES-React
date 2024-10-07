import React from 'react'
import "../Footer/footer.css"

const Footer = () => {
  return (
    
    <footer>
    <div className="container1">

        <div className="footer-container">

            <div className="footer-column" style={{width: "300px",marginRight:"1.7rem"}}>
                <h3>About Us</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam ut, quis laborum tenetur odit dolor quos minus in, ducimus quaerat repellendus laudantium rem accusantium magni est.</p>
                <a href="#">Read more</a>
            </div>

            <div className="footer-column" style={{marginLeft: "1.7rem"}}>
                <h3>Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Our Menu</a></li>
                    <li><a href="#">Special Offers</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>Our Menu</h3>
                <ul>
                    <li><a href="#">Breakfast</a></li>
                    <li><a href="#">Brunch</a></li>
                    <li><a href="#">Dinner</a></li>
                    <li><a href="#">Drinks</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>Opening Hours</h3>
                <p>Monday - Friday<br/>8:00 am — 5:00pm</p>
                <p>Sunday<br/>8:00 am — 8:00pm</p>
            </div>

        </div>

        <div className="footer-bottom">
            <p>Copyright ©2024 All rights reserved | This template is made with <span>❤️</span> by <a href="#">Colorlib</a></p>
        </div>

    </div>
</footer>

  )
}

export default Footer