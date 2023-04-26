import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const Page5 = () => {
    return (
        <div>
            <div style={{ height: '100vh' }}>
                <section  >
                    <Container fluid className='m-0 pt-4' >
                        <Card className='text-center mb-5' >
                            <div className='my-4' data-aos="fade-up">
                            <span className='fw-bold text-black fs-4'>How much does</span>
                            <span style={{ color: '#50adb5', borderBottom: '4px solid black' }} className='fs-1 fw-bold ' > {' '}PriceUp </span>
                            <span className='fw-bold text-black fs-4'>Costs?</span>
                            </div>
                            <div className='d-flex flex-row justify-content-around'>
                                <Card data-aos="flip-right">
                                    <div className=' py-3 fs-5 fw-semibold text-white' style={{background:'#50adb5'}}>
                                        Basic
                                    </div>
                                    <div className='p-3'>
                                    <p>29 / Month</p>
                                    <p style={{color:'#50adb5'}}>Apatment , Bed & Breakfast</p>
                                    <div className='text-left'>
                                        <ul>
                                            <li>Main functionalities of PriceUp PMS</li>
                                            <li>Channel Manager</li>
                                            <li>The Booking Engine.</li>
                                        </ul>
                                    </div>
                                    <p style={{color:'#50adb5'}}> Get 20 % off</p>
                                    <p>on 12 Month immediate Payment</p>
                                    <Button className='fw-semibold ' style={{color:'#50adb5', background:'none'}} >GET STARTED</Button>
                                    </div>
                                </Card>
                                <Card data-aos="flip-left">
                                    <div className=' py-3 fs-5 fw-semibold text-white' style={{background:'#50adb5'}}>
                                        Standard
                                    </div>
                                    <div className='p-3'>
                                    <p>29 / Month</p>
                                    <p style={{color:'#50adb5'}}>Apatment , Bed & Breakfast</p>
                                    <div className='text-left'>
                                        <ul>
                                            <li>Main functionalities of PriceUp PMS</li>
                                            <li>Channel Manager</li>
                                            <li>The Booking Engine.</li>
                                        </ul>
                                    </div>
                                    <p style={{color:'#50adb5'}}> Get 20 % off</p>
                                    <p>on 12 Month immediate Payment</p>
                                    <Button className='fw-semibold ' style={{color:'#50adb5', background:'none'}} >GET STARTED</Button>
                                    </div>
                                </Card>
                                <Card data-aos="flip-right">
                                    <div className=' py-3 fs-5 fw-semibold text-white' style={{background:'#50adb5'}}>
                                        Premium
                                    </div>
                                    <div className='p-3'>
                                    <p>29 / Month</p>
                                    <p style={{color:'#50adb5'}}>Apatment , Bed & Breakfast</p>
                                    <div className='text-left'>
                                        <ul>
                                            <li>Main functionalities of PriceUp PMS</li>
                                            <li>Channel Manager</li>
                                            <li>The Booking Engine.</li>
                                        </ul>
                                    </div>
                                    <p style={{color:'#50adb5'}}> Get 20 % off</p>
                                    <p>on 12 Month immediate Payment</p>
                                    <Button className='fw-semibold ' style={{color:'#50adb5', background:'none'}} >GET STARTED</Button>
                                    </div>
                                </Card>
                            </div>
                            <div className='row justify-content-around my-1' >
                                <div className='col-6 text-start ' data-aos="fade-down">
                                    
                                <p style={{color:'#50adb5'}} className='fw-semibold'>Plans Built To Grow With Your Business</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptatem rerum asperiores ratione quae magni adipisci mollitia qui sunt facere?</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptatem rerum asperiores ratione quae magni adipisci mollitia qui sunt facere?</p>
                                </div>
                                <div className='col-4'>
                                    <Button className='fw-semibold w-100 py-3' style={{border:'none', color:'black', background:'#e8f0f2'}}>Request A Customized Quote</Button>
                                    <p>OR</p>
                                    <Button className='fw-semibold w-100 py-3' style={{border:'none',color:'white', background:'#50adb5'}}>Try it Now</Button>
                                </div>
                            </div>
                        </Card>
                    </Container>
                </section>
            </div>
        </div>
    )
}

export default Page5