import React from 'react'
import { Container } from 'react-bootstrap'
import computer from '../../assets/images/computer.png'
import screen from '../../assets/images/screen.png'

const Page3 = () => {
    return (
        <div style={{ height: '100vh', background: '#e8f0f2' }}>
            <section  >
                <Container fluid className='m-0 pt-4' >
                    <div data-aos="fade-up" className='text-center' ><span className='fw-bold text-black fs-1'>Introducing</span> <span style={{ color: '#50adb5', borderBottom: '4px solid black' }} className='fs-1 fw-bold ' >PriceUp?</span></div>
                    <div data-aos="fade-down" className='fw-semibold text-center my-5'>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, dolores. Lorem, ipsum dolor.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='row text-center mt-5'>
                        <div className='col-3' data-aos="fade-down">
                            <div>
                                <p className='fw-bold' >Channel Manager</p>
                                <p className='fw-semibold' >Manage all your online distribution Channels</p>
                                <p style={{fontSize:'1vw'}} >Receive reservations from OTAs, automatically update availability and rate plans and avoid the risk of overbooking.</p>
                            </div>
                            <div>
                                <p className='fw-bold' >Channel Manager</p>
                                <p style={{fontSize:'1vw'}}> Receive reservations from OTAs, automatically update availability and rate plans and avoid the risk of overbooking.</p>
                            </div>
                            <div>
                                <p className='fw-bold' >CRM Software</p>
                                <p className='fw-semibold' >Enhance your performance.</p>
                                <p style={{fontSize:'1vw'}}>It provides the monthly revenue of the hotel room. </p>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div className='position-relative' >
                                <img src={computer} alt="computer" style={{height:'18rem'}} />
                                <hr className='position-absolute' style={{top:'0%', left:'0%' ,width:'10rem', height:'8rem'}}></hr>
                                <hr className='position-absolute' style={{top:'0%', right:'0%' ,width:'10rem', height:'8rem'}}></hr>
                                <hr className='position-absolute' style={{top:'50%', left:'0%' ,width:'10rem', height:'8rem'}}></hr>
                                <hr className='position-absolute' style={{top:'50%', right:'0%' ,width:'10rem', height:'8rem'}}></hr>
                                <img className='position-absolute' style={{top:'6%', left:'30%' ,width:'16rem', height:'8rem'}} src={screen} alt='screen' />
                            </div>
                            <div data-aos="fade-down">
                                <p className='fw-bold' >CRM Software</p>
                                <p className='fw-semibold' >Enhance your performance.</p>
                                <p style={{fontSize:'1vw'}}>It provides the monthly revenue of the hotel room. </p>
                            </div>
                        </div>
                        
                        <div className='col-3' data-aos="fade-down">
                            <div>
                                <p className='fw-bold' >Channel Manager</p>
                                <p className='fw-semibold' >Manage all your online distribution Channels</p>
                                <p style={{fontSize:'1vw'}} >Receive reservations from OTAs, automatically update availability and rate plans and avoid the risk of overbooking.</p>
                            </div>
                            <div>
                                <p className='fw-bold' >Channel Manager</p>
                                <p style={{fontSize:'1vw'}}> Receive reservations from OTAs, automatically update availability and rate plans and avoid the risk of overbooking.</p>
                            </div>
                            <div>
                                <p className='fw-bold' >CRM Software</p>
                                <p className='fw-semibold' >Enhance your performance.</p>
                                <p style={{fontSize:'1vw'}}>It provides the monthly revenue of the hotel room. </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Page3