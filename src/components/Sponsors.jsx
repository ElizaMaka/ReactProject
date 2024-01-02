import React from 'react'

export default function Sponsors() {
  return (
    <div>
       <div className='sponsor'>
                <div className="title">
                    <h1>Trusted by over 1,500 businesses around the world</h1>
                </div>
                <div className="sponsor-country">
                    <ul className="nav nav-pills mb-1" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-nepal" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Nepal</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-india" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">India</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-usa" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">USA</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-uk" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">UK</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-singapore" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Singapore</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-europe" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Europe</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-canada" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Canada</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-africa" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Africa</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-other" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Others</button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">All</div>
                    <div className="tab-pane fade" id="pills-nepal" role="tabpanel" aria-labelledby="pills-nepal-tab" tabIndex="0">Nepal</div>
                    <div className="tab-pane fade" id="pills-india" role="tabpanel" aria-labelledby="pills-india-tab" tabIndex="0">India</div>
                    <div className="tab-pane fade" id="pills-usa" role="tabpanel" aria-labelledby="pills-usa-tab" tabIndex="0">USA</div>
                    <div className="tab-pane fade" id="pills-uk" role="tabpanel" aria-labelledby="pills-uk-tab" tabIndex="0">UK</div>
                    <div className="tab-pane fade" id="pills-singapore" role="tabpanel" aria-labelledby="pills-singapore-tab" tabIndex="0">Singapore</div>
                    <div className="tab-pane fade" id="pills-europe" role="tabpanel" aria-labelledby="pills-europe-tab" tabIndex="0">europe</div>
                    <div className="tab-pane fade" id="pills-canada" role="tabpanel" aria-labelledby="pills-canada-tab" tabIndex="0">canada</div>
                    <div className="tab-pane fade" id="pills-africa" role="tabpanel" aria-labelledby="pills-contafrica-tab" tabIndex="0">africa</div>
                    <div className="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab" tabIndex="0">other</div>
                </div>
            </div>
    </div>
  )
}
