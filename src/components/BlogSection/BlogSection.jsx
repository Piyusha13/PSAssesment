import React from 'react'
import { Button, Card, Container, Image } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import blogImg from "../../assets/images/blog1.png"
import "./BlogSection.style.css"

const BlogSection = () => {
  return (
    <div style={{ height: '100vh' }}>
            <section>
                <Container fluid className='m-0 px-4'>
                    <div className='text-start mb-5' data-aos="fade-up">
                        <p className='fs-2 fw-bold'>Blogs</p>
                        <p className='fs-6 fw-semibold mb-0 pb-0'> amet consectetur, adipisicing elit. Eligendi impedit officia nostrum id adipisci?</p>
                        <p className='fs-6 fw-semibold pt-0 mt-0'>  Eligendi impedit officia nostrum id adipisci?</p>
                    </div>
                    <div className='px-0 blog position-relative' data-aos="fade-down">
                        <Swiper
                        modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <Card className='text-start' style={{borderRadius:"3%"}}>
                                    
                                    <div>
                                        <Image src={blogImg} alt="blogImg" />
                                    </div>
                                    <div className='p-3'>
                                        <p className='fw-bold fs-4'>Lorem ipsum</p>

                                        <div className='fw-semibold'>
                                            <p className='p-0 m-0'>Lorem ipsum dolor sit amet.</p>
                                            <p className='p-0 m-0'>Lorem ipsum dolor sit amet.</p>
                                            <p className='p-0 m-0'>Lorem ipsum ... <span  style={{fontSize:'0.8rem',color:'#50adb5'}}>Read more</span></p>
                                        </div>
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='text-start' style={{borderRadius:"3%"}}>
                                    
                                    <div>
                                        <Image src={blogImg} alt="blogImg" />
                                    </div>
                                    <div className='p-3'>
                                        <p className='fw-bold fs-4'>Lorem ipsum</p>

                                        <div className='fw-semibold'>
                                            <p className='p-0 m-0'>Lorem ipsum dolor sit amet.</p>
                                            <p className='p-0 m-0'>Lorem ipsum dolor sit amet.</p>
                                            <p className='p-0 m-0'>Lorem ipsum ... <span  style={{fontSize:'0.8rem',color:'#50adb5'}}>Read more</span></p>
                                        </div>
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='text-start' style={{borderRadius:"3%"}}>
                                    
                                    <div>
                                        <Image src={blogImg} alt="blogImg" />
                                    </div>
                                    <div className='p-3'>
                                        <p className='fw-bold fs-4'>Lorem ipsum</p>

                                        <div className='fw-semibold'>
                                            <p className='p-0 m-0'>Lorem ipsum dolor sit amet.</p>
                                            <p className='p-0 m-0'>Lorem ipsum dolor sit amet.</p>
                                            <p className='p-0 m-0'>Lorem ipsum ... <span  style={{fontSize:'0.8rem',color:'#50adb5'}}>Read more</span></p>
                                        </div>
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='text-start' style={{borderRadius:"3%"}}>
                                    
                                    <div>
                                        <Image src={blogImg} alt="blogImg" />
                                    </div>
                                    <div className='p-3'>
                                        <p className='fw-bold fs-4'>Lorem ipsum</p>

                                        <div className='fw-semibold'>
                                            <p className='p-0 m-0'>Lorem ipsum dolor sit amet.</p>
                                            <p className='p-0 m-0'>Lorem ipsum dolor sit amet.</p>
                                            <p className='p-0 m-0'>Lorem ipsum ... <span  style={{fontSize:'0.8rem',color:'#50adb5'}}>Read more</span></p>
                                        </div>
                                    </div>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='text-start' style={{borderRadius:"3%"}}>
                                    
                                    <div>
                                        <Image src={blogImg} alt="blogImg" />
                                    </div>
                                    <div className='p-3'>
                                        <p className='fw-bold fs-4'>Lorem ipsum</p>

                                        <div className='fw-semibold'>
                                            <p className='p-0 m-0'>Lorem ipsum dolor sit amet.</p>
                                            <p className='p-0 m-0'>Lorem ipsum dolor sit amet.</p>
                                            <p className='p-0 m-0'>Lorem ipsum ... <span  style={{fontSize:'0.8rem',color:'#50adb5'}}>Read more</span></p>
                                        </div>
                                    </div>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='row justify-content-center mt-5'>      
                    <Button style={{background:'#50adb5',padding:'5rem' ,border:'none', borderRadius:'4px'}} className='text-white  py-2 fs-4 mx-5 fw-semibold col-3' >
                        View All
                    </Button>
                    </div>

                </Container>
            </section>
        </div>
  )
}

export default BlogSection