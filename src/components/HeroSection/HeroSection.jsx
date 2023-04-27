import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import './HeroSection.style.css'
import bgImg from '../../assets/images/heroSectionBg.png'

const HeroSection = () => {
  return (
    <div className=''>
        <section>
            <Container fluid className='m-0 p-0 position-relative' >
                <div style={{backgroundColor:"#e8f0f2"}} >
                <Image  style={{zIndex:"9",height:'100vh' ,clipPath:'polygon(100% 0, 60% 0, 43% 30%, 45% 78%, 100% 100%, 100% 100%)'}}  src={bgImg} className='herosectionimg overflow-hidden' alt="herosectionbg" />
                </div>
                <div data-aos="fade-up" className='position-absolute px-4' style={{top:'15%',left:'1%' , width:'55%'}}>
                    <div className='fs-1 fw-bold'>
                        More revenue for your hotel Automate your room rates <span className='text-black bg-white fw-bold py-1 px-2' style={{borderRadius:'3px'}} >120$|</span>
                    </div>
                    <div className='fw-semibold fs-5 my-3'>
                        <p>Our intelligent machine learning algorithms</p>
                        <p>optimally adjust your room rates.</p>
                        <p>Optimize your pricing strategy based on</p>
                        <p>occupancy, events and current demand.</p>
                    </div>
                    <Button style={{background:'#50adb5',padding:'5rem' ,border:'none', borderRadius:'4px'}} className='text-white my-3 py-2 fs-4 mx-5 fw-semibold' >Get Started</Button>
                </div>
                
            </Container>
        </section>
    </div>
  )
}

export default HeroSection