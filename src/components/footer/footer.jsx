import React from 'react';
import "./footer.css"

function Footer  () {
  return (
  

    <footer>
        <div className="footer_main">
            <div className="tag">
                <h1>Contact</h1>
                <a href="#"><i className="fa-solid fa-house"></i>elsharqa/ zagazg / dyerb negem</a>
                <a href="#"><i className="fa-solid fa-phone"></i>+20 127 0381 307 </a>
                <a href="#"><i className="fa-solid fa-envelope"></i>almsrybdalrhmm111@gmail.com</a>
            </div>

            <div className="tag">
                <h1>Get Help</h1>
                <a href="#" className="center">FAQ</a>
                <a href="#" className="center">Shipping</a>
                <a href="#" className="center">Returns</a>
                <a href="#" className="center">Payment Options</a>
            </div>

            <div className="tag">
                <h1>Our Stores</h1>
                <a href="#" className="center">Sri Lanka</a>
                <a href="#" className="center">USA</a>
                <a href="#" className="center">India</a>
                <a href="#" className="center">Japan</a>
            </div>

            </div>
    
    </footer>

  );
}

export default Footer;
