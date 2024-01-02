import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faComment, faPhone, faAt} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <div className='contact'>
            <div className="page-banner">
                <h1>Contact us</h1>
            </div>
            <div className='contact-content'>
                <div className='container'>
                    <div className='row col-md-9' >
                        <div className="col-md-6">
                            <div className='contact-col'>
                                <FontAwesomeIcon icon={faLocationDot} className='service-icon' />
                                <div className='contact-info'>
                                    <h3>Address</h3>
                                    <p>Chand Kripaa, Tinpaini</p>
                                    <p>Biratnagar-2, Nepal</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='contact-col'>
                                <FontAwesomeIcon icon={faComment} className='service-icon' />
                                <div className='contact-info'>
                                    <h3>Skype</h3>
                                    <p>info@deltatechnepal.com</p>
                                    <p>contact@deltatechnepal.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row col-md-9'>
                        <div className="col-md-6">
                            <div className='contact-col'>
                                <FontAwesomeIcon icon={faPhone} className='service-icon' />
                                <div className='contact-info'>
                                    <h3>Phone</h3>
                                    <p>+977-021-571617</p>
                                    <p>+977-021-571618</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='contact-col'>
                                <FontAwesomeIcon icon={faAt} className='service-icon' />
                                <div className='contact-info'>
                                    <h3>Email</h3>
                                    <p>info@deltatechnepal.com</p>
                                    <p>hello@deltatechnepal.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
