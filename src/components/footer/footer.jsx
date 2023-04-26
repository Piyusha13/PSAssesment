import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import location from "../../assets/icons/loction.png"
import email from "../../assets/icons/email.png"
import call from "../../assets/icons/call.png"
import fb from "../../assets/icons/Group 48.png"
import insta from "../../assets/icons/Group 49.png"
import linkedIn from "../../assets/icons/Group 50.png"
import twitter from "../../assets/icons/Group 51.png"


const Footer = () => {
  return (
    <div  className='bg-black text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4'>
        <div className='me-5 d-none d-lg-block'>
        <div href="#home" className='fs-1 fw-light' ><span style={{color:'#cbd0d2'}} >Price</span><span style={{color:'#50adb5'}}>Up</span></div>
        
        </div>

       <div>
          <a href='#a' className='me-4  text-white fs-4 fw-semibold'  >
            Featurs
          </a>
          <a href='#b' className='me-4 px-3 text-white fs-4 fw-semibold' style={{borderLeft:'2px solid white', borderRight:'2px solid white'}}>
            Pricing
          </a>
          <a href='#c' className='me-4  text-white fs-4 fw-semibold'>
            Blog
          </a>
          <a href='#d' className='me-4 px-3 text-white fs-4 fw-semibold' style={{borderLeft:'2px solid white', borderRight:'2px solid white'}}>
            Privacy Policy
          </a>
          <a href='#f' className='me-4  text-white fs-4 fw-semibold'>
            Contact Us
          </a>
        </div>
      </section>

      <section className=''>
        <Container fluid className='text-center text-md-start mt-2'>
          <Row className='mt-0 d-flex flex-row justify-content-between '>
            <Col md='3' lg='6' xl='3' className='mx-2 mb-4'>
            <p  className='me-4  text-white fs-4 fw-bold'  >
            Newsletter
          </p>
              <p className='me-4  text-white fs-5 fw-semibold'>
                Sign up to our newslatter
              </p>
              <div className='position-relative'>
                <input className='p-3 w-100 ' style={{borderRadius:'5px',border:'none'}} placeholder='Email' />
                <Button style={{left:'40%',top:'-10%',background:'#50adb5',padding:'1rem' ,border:'none', borderRadius:'4px'}} className='text-white my-3 py-1 fs-5 mx-5 fw-semibold position-absolute ' >Subscribe</Button>
              </div>
            </Col>


            <Col md='4' lg='6' xl='3' className='text-white  mb-md-0 mb-4' style={{alignContent:'right'}}>
              <p>
                <img src={location} alt="location" /> Address line 1
              </p>
              <p>
              <img src={call} alt="call" /> 9999999999
              </p>
                <p>
                <img src={email} alt="email" /> info@domainname.com
              </p>
              <p className='d-flex flex-row '>
              <img src={fb} alt="email" className='mx-2' />
              <img src={twitter} alt="email" className='mx-2'/>
              <img src={linkedIn} alt="email" className='mx-2'/>
              <img src={insta} alt="email" className='mx-2'/>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center text-white p-4' style={{fontSize:'0.8rem', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      Copyright © 2021 All Right Reserved.Private Policy
      </div>
    </div>
  )
}

export default Footer;
