import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="site-footer">
            <div className='site-footer-container'>
                <div className='site-footer-row'>
                    <div className='col-xs-6 col-md-3'>
                        <a href=""><img src="/deltatech-logo.svg" alt="logo" style={{width:'200px', marginBottom:'30px'}}/></a>
                        <p style={{fontWeight:'700'}}>Connect with us</p>
                        <Link to="/contact-us"><button className="global-btn" type="submit"> Contact Us</button></Link>
                    </div>
                    <div className='col-xs-6 col-md-3'>
                        <h5>Our Company</h5>
                        <p>About Us</p>
                        <p>Portfolio</p>
                        <p>Clients</p>
                        <p>Careers</p>
                        <p>News and announcements</p>
                        <p>Privacy policy</p>
                        <p>Contect Us</p>
                    </div>
                    <div className='col-xs-6 col-md-3'>
                        <h5>Our Serrvices</h5>
                        <p>Corporate Website Design</p>
                        <p>E-commerce Solution</p>
                        <p>Mobile App Development</p>
                        <p>Web Application Development</p>
                        <p>Software Development</p>
                        <p>Search Engine Optimization (SEO)</p>
                        <p>Graphics Designing</p>
                    </div>
                    <div className='col-xs-6 col-md-3'>
                        <h5>Contact Us</h5>
                        <p>Chand Kripaa, Tinpaini Biratnagar-2, Nepal</p>
                        <p>+977-9801563518</p>
                        <p>info@deltatechnepal.com</p>
                        <p>sales@deltatechnepal.com</p>
                        <p>support@deltatechnepal.com</p>
                        <p>career@deltatechnepal.com</p>
                    </div>
                </div>
                <div className='footer-logo'>
                    <h5>Our Products</h5>
                    <img src="/f-logo.png" alt="" />
                    <img src="/f-logo2.png" alt="" />
                    <img src="/f-logo3.png" alt="" />
                    <img src="/f-logo4.png" alt="" />
                </div>
            </div>
        </div>
        <div className="end-footer">
            <p>© 2024 Delta Tech. All Rights Reserved.</p>
            <p>Privacy Policy</p>
        </div>
    </div>
    </>
  )
}