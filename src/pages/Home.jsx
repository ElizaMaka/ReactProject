import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMobile, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Sponsors from '../components/Sponsors'

export default function Home() {
    return (
        <>
            <figure className='banner'>
                <div className="container banner-content">
                    <div className="row">
                        <div className="col-lg-7 content1">
                            <p style={{ fontSize: "48px", fontWeight: "700", paddingBottom: "0.3rem" }}>Offering you the best  digital products and services.</p>
                            <p style={{ fontSize: "20px", fontWeight: "500", lineHeight: "1.6", paddingBottom: "0.3rem" }} >Empower and unlock business value with technology and innovation.</p>
                            <div className='btns'>
                                <Link to="/about-us"><button className="global-btn" type="submit"><h5>About Us</h5></button> </Link>
                                <button className="global-btn" type="submit"><h5>Lets talk</h5></button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img src="/banner-img.png" alt="img" className='banner-img' />
                        </div>
                    </div>
                </div>
                <div className='social-medias container'>
                    <div className='row'>
                        <div className="col-lg-2 col-sm-2">
                            <img src="/b1.png" alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <img src="/b2.png" alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <img src="/b3.png" alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <img src="/b4.png" alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <img src="/b5.png" alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <img src="/b6.png" alt="" />
                        </div>

                    </div>
                </div>
            </figure>
            <div className='about-us'>
                <div className="about-us-content">
                    <h1>About Us</h1>
                    <p>Delta Tech is a software development and IT consultancy company located in Nepal. We are specialized in providing IT solutions that improve and transform the way businesses work. We are also a proud member of one of the most prestigious and oldest business houses of Nepal, RK Golchha Group (Golchha Organization).</p>
                    <Link to="/about-us" className='aboutus-more'>Know More</Link>
                </div>
            </div>


            <div className='our-product'>
                <div className="title">
                    <h1>Transform the way your business works with world-class software solutions</h1>
                </div>
                <div className='product'>
                    <div className='product-row'>
                        <figure className="p1 product-column p1-content">
                            <div className=''>
                                <p>Delta Sales App</p>
                                <p>Track field sales employees and manage sales of your business</p>
                                <a href="#">Learn More</a>
                            </div>
                        </figure>
                        <div className=' p2 product-column p1-content'>
                            <div className="">
                                <h4>Contact Us</h4>
                                <p>Let's work together for success!</p>
                                <p>Never hesitate to look for the best solutions. Do contact us if you have any queries, we would love to answer and help you out.</p>
                                <a href="#">Drop us a message</a>
                            </div>
                        </div>
                    </div>
                    <div className="product-row">
                        <div className='p3 product-column p1-content'>
                            <div className="">
                                <p>Delta Sales CRM</p>
                                <p>Complete sales life cycle management software to help you close more deals</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                        <div className='p3 product-column p1-content'>
                            <div className="">
                                <p>Delta Sales CRM</p>
                                <p>Complete sales life cycle management software to help you close more deals</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                        <div className='p3 product-column p1-content'>
                            <div className="">
                                <p>Delta Retailer App</p>
                                <p>Order automation app connecting retailers, distributors and brands</p>
                                <a href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='service'>
                <div className='title'>
                    <h3>IT Services We Offer</h3>
                </div>
                <div className='service-row'>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faCode} className='service-icon' />
                        <div className="row-content">
                            <p style={{ fontSize: '20px', fontWeight: '700' }}>Software Development</p>
                            <p style={{ fontSize: '20px' }} >Get a robust and user-friendly software that solves your business problems</p>
                        </div>
                    </div>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faMobile} className='service-icon' />
                        <div className="row-content">
                            <p style={{ fontSize: '20px', fontWeight: '700' }}>Mobile App Development</p>
                            <p style={{ fontSize: '20px' }} >Build a high-performance iOS and android mobile applications at affordable rates</p>
                        </div>
                    </div>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faGlobe} className='service-icon' />
                        <div className="row-content">
                            <p style={{ fontSize: '20px', fontWeight: '700' }}>Mobile Application Development</p>
                            <p style={{ fontSize: '20px' }} >Build a powerful custom web application or web portal based on your requirements</p>
                        </div>
                    </div>
                </div>

                <div className='service-row'>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faCode} className='service-icon' />
                        <div className="row-content">
                            <p style={{ fontSize: '20px', fontWeight: '700' }}>Software Development</p>
                            <p style={{ fontSize: '20px' }} >Get a robust and user-friendly software that solves your business problems</p>
                        </div>
                    </div>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faMobile} className='service-icon' />
                        <div className="row-content">
                            <p style={{ fontSize: '20px', fontWeight: '700' }}>Mobile App Development</p>
                            <p style={{ fontSize: '20px' }} >Build a high-performance iOS and android mobile applications at affordable rates</p>
                        </div>
                    </div>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faGlobe} className='service-icon' />
                        <div className="row-content">
                            <p style={{ fontSize: '20px', fontWeight: '700' }}>Mobile Application Development</p>
                            <p style={{ fontSize: '20px' }} >Build a powerful custom web application or web portal based on your requirements</p>
                        </div>
                    </div>
                </div>

                <div className='service-row'>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faCode} className='service-icon' />
                        <div className="row-content">
                            <p style={{ fontSize: '20px', fontWeight: '700' }}>Software Development</p>
                            <p style={{ fontSize: '20px' }} >Get a robust and user-friendly software that solves your business problems</p>
                        </div>
                    </div>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faMobile} className='service-icon' />
                        <div className="row-content">
                            <p style={{ fontSize: '20px', fontWeight: '700' }}>Mobile App Development</p>
                            <p style={{ fontSize: '20px' }} >Build a high-performance iOS and android mobile applications at affordable rates</p>
                        </div>
                    </div>
                    <div className='service-card'>
                        <FontAwesomeIcon icon={faGlobe} className='service-icon' />
                        <div className="row-content">
                            <p style={{ fontSize: '20px', fontWeight: '700' }}>Mobile Application Development</p>
                            <p style={{ fontSize: '20px' }} >Build a powerful custom web application or web portal based on your requirements</p>
                        </div>
                    </div>
                </div>
            </div>

            <Sponsors />
        </>
    )
}
