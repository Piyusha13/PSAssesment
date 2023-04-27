import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import "./Page6.style.css"

const Page6 = () => {
    return (
        <div style={{ height: '100vh' }}>
            <section>
                <Container fluid className='m-0 pt-4 page6'>
                    <div className='text-center my-5' data-aos="fade-up">
                        <p className='fs-4 fw-bold'>WHY PEOPLE BELIEVE IN US</p>
                        <p className='fs-5 fw-bold'>We Understant Hotels, Like No One Does</p>
                    </div>
                    <div className='px-5' data-aos="fade-down">
                        <Swiper
                        modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <Card className='text-center' style={{ background: '#50adb5', color: 'white', border: 'none', borderRadius: '10% 0% 10% 0%' }}>
                                    
                                    <div className='py-3 text-start' style={{ fontSize: '10vh' }}>||</div>
                                    <div className='mb-5 fw-semibold'>
                                        <p>"Our Experience with Priceup is splendid</p>
                                        <p>It saves working time, user friendly</p>
                                        <p>interface and great support team".</p>
                                    </div>
                                    <p className='fs-4 fw-semibold mb-5'>Mr John</p>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='text-center' style={{ background: '#50adb5', color: 'white', border: 'none', borderRadius: '10% 0% 10% 0%' }}>
                                    
                                    <div className='py-3 text-start' style={{ fontSize: '10vh' }}>||</div>
                                    <div className='mb-5 fw-semibold'>
                                        <p>"Our Experience with Priceup is splendid</p>
                                        <p>It saves working time, user friendly</p>
                                        <p>interface and great support team".</p>
                                    </div>
                                    <p className='fs-4 fw-semibold mb-5'>Mr John</p>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='text-center' style={{ background: '#50adb5', color: 'white', border: 'none', borderRadius: '10% 0% 10% 0%' }}>
                                    
                                    <div className='py-3 text-start' style={{ fontSize: '10vh' }}>||</div>
                                    <div className='mb-5 fw-semibold'>
                                        <p>"Our Experience with Priceup is splendid</p>
                                        <p>It saves working time, user friendly</p>
                                        <p>interface and great support team".</p>
                                    </div>
                                    <p className='fs-4 fw-semibold mb-5'>Mr John</p>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='text-center' style={{ background: '#50adb5', color: 'white', border: 'none', borderRadius: '10% 0% 10% 0%' }}>
                                    
                                    <div className='py-3 text-start' style={{ fontSize: '10vh' }}>||</div>
                                    <div className='mb-5 fw-semibold'>
                                        <p>"Our Experience with Priceup is splendid</p>
                                        <p>It saves working time, user friendly</p>
                                        <p>interface and great support team".</p>
                                    </div>
                                    <p className='fs-4 fw-semibold mb-5'>Mr John</p>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='text-center' style={{ background: '#50adb5', color: 'white', border: 'none', borderRadius: '10% 0% 10% 0%' }}>
                                    
                                    <div className='py-3 text-start' style={{ fontSize: '10vh' }}>||</div>
                                    <div className='mb-5 fw-semibold'>
                                        <p>"Our Experience with Priceup is splendid</p>
                                        <p>It saves working time, user friendly</p>
                                        <p>interface and great support team".</p>
                                    </div>
                                    <p className='fs-4 fw-semibold mb-5'>Mr John</p>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='text-center' style={{ background: '#50adb5', color: 'white', border: 'none', borderRadius: '10% 0% 10% 0%' }}>
                                    
                                    <div className='py-3 text-start' style={{ fontSize: '10vh' }}>||</div>
                                    <div className='mb-5 fw-semibold'>
                                        <p>"Our Experience with Priceup is splendid</p>
                                        <p>It saves working time, user friendly</p>
                                        <p>interface and great support team".</p>
                                    </div>
                                    <p className='fs-4 fw-semibold mb-5'>Mr John</p>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='text-center' style={{ background: '#50adb5', color: 'white', border: 'none', borderRadius: '10% 0% 10% 0%' }}>
                                    
                                    <div className='py-3 text-start' style={{ fontSize: '10vh' }}>||</div>
                                    <div className='mb-5 fw-semibold'>
                                        <p>"Our Experience with Priceup is splendid</p>
                                        <p>It saves working time, user friendly</p>
                                        <p>interface and great support team".</p>
                                    </div>
                                    <p className='fs-4 fw-semibold mb-5'>Mr John</p>
                                </Card>
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Page6