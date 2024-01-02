import React from 'react'
import Sponsors from '../components/Sponsors'

export default function About({ about }) {
    return (
        <>
            <div className='about'>
                <div className='page-banner'>
                    <h1>About Us</h1>
                </div>
                {about.map(a=>(
                    <div className='about-content' key={a.id}>
                        <div className='about-content-col'>
                            <h2>About Delta Tech</h2>
                            <p>{a.description}</p>
                        </div>
                        <div className='about-content-img'>
                            <iframe src={a.url} frameBorder="0" allowFullScreen
                                style={{ width: '400px', height: '300px' }}> </iframe>
                        </div>
                    </div>
                ))}
                
                <div className='story'>
                    <h2>Our Story</h2>
                    <div className='story-card'>
                        <h6 className='story-card-title'>Idea of delta Tech</h6>
                        <small className='story-card-date'>july 2016</small>
                        <hr style={{margin:'10px 0'}} />
                        <p className='story-card-text'>Delta Tech envisions to provide web designing services.</p>
                    </div>
                    <div className='story-card'>
                        <h6 className='story-card-title'>Idea of delta Tech</h6>
                        <small className='story-card-date'>july 2016</small>
                        <hr style={{margin:'10px 0'}} />
                        <p className='story-card-text'>Delta Tech envisions to provide web designing services.</p>
                    </div>
                    <div className='story-card'>
                        <h6 className='story-card-title'>Idea of delta Tech</h6>
                        <small className='story-card-date'>july 2016</small>
                        <hr style={{margin:'10px 0'}} />
                        <p className='story-card-text'>Delta Tech envisions to provide web designing services.</p>
                    </div>
                </div>
            </div>
            <Sponsors />
        </>
    )
}
