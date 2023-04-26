import React from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import client1 from '../../assets/images/ahla.png'
import client2 from '../../assets/images/dehoga.png'
import client3 from '../../assets/images/ukh.png'
import client4 from '../../assets/images/he.png'
import client5 from '../../assets/images/ihra.png'
import client6 from '../../assets/images/hm.png'
import client7 from '../../assets/images/htr.png'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

const ClientSection = () => {
  return (
    <div style={{ height: '50vh', background: 'white' }}>
            <section  >
                <Container fluid className='m-0 pt-0' >
                    <div className='fs-3 fw-bold text-center' >OUR CLIENTS</div>
                    <Card className='d-flex flex-row justify-content-around p-3'>
                                <Image  src={client2} alt="c1"/>
                            
                                <Image src={client3} alt="c1"/>
                            
                                <Image src={client4} alt="c1"/>
                            
                                <Image src={client5} alt="c1"/>
                           
                                <Image src={client1} alt="c1"/>
                            
                                <Image src={client6} alt="c1"/>
                            
                                <Image src={client7} alt="c1"/>
                            
                    </Card>
                </Container>
                </section>
                </div>
  )
}

export default ClientSection