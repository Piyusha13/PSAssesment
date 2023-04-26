import React from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import cloud from '../../assets/icons/cloud.png'
import smile from '../../assets/icons/smile.png'
import clock from '../../assets/icons/clock.png'
import loader from '../../assets/icons/loader.png'

const Page4 = () => {
    return (

        <div style={{ height: '100vh' }}>
            <section  >
                <Container fluid className='m-0 pt-4' >
                    <div data-aos="fade-up" className='text-left mb-5' > {' '}
                    <span style={{ color: '#50adb5', borderBottom: '4px solid black' }} className='fs-1 fw-bold ' > {' '}PriceUp </span>
                    <span className='fw-bold text-black fs-4'>Benifits</span>
                    </div>
                    <div className='' style={{ background: '#e8f0f2', width:'100vw'}}>
                        <div className='d-flex flex-row justify-content-between text-center w-100 '>
                            <Card className='p-3' data-aos="flip-right">
                                <Image src={cloud} alt="cloud" className='py-5'  style={{width:'3rem', alignSelf:'center'}} />
                                <p className='fw-bold fs-4'>100% Cloud-based</p>
                                <p className='fw-semibold'>All you need is an internet connection.</p>
                            </Card>
                            <Card className='p-3' data-aos="flip-left" >
                                <Image src={smile} alt="cloud" className='py-5'  style={{width:'3rem', alignSelf:'center'}}/>
                                <p className='fw-bold fs-4'>100% Cloud-based</p>
                                <p className='fw-semibold'>All you need is an internet connection.</p>
                            </Card>
                            <Card data-aos="flip-right" className='p-3'>
                                <Image src={clock} alt="cloud" className='py-5'  style={{width:'3rem', alignSelf:'center'}}/>
                                <p className='fw-bold fs-4'>100% Cloud-based</p>
                                <p className='fw-semibold'>All you need is an internet connection.</p>
                            </Card>
                            <Card className='p-3' data-aos="flip-left">
                                <Image src={loader} alt="cloud" className='py-5'  style={{width:'3rem', alignSelf:'center'}}/>
                                <p className='fw-bold fs-4'>100% Cloud-based</p>
                                <p className='fw-semibold'>All you need is an internet connection.</p>
                            </Card>
                        </div>
                        <div className='text-center py-5' data-aos="fade-down">
                            <p className='fw-semibold fs-3'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            <p>Lorem ipsum dolor consectetur adipisicing elit. Voluptatibus nisi aliquam, corporis illo nostrum labore!</p>
                            <p>Lorem ipsum  adipisicing elit. Voluptatibus nisi aliquam, corporis illo nostrum labore!</p>
                            <p>Lorem ipsum  Voluptatibus nisi aliquam, corporis illo nostrum labore!</p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Page4