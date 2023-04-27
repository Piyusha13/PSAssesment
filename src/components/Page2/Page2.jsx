import React from 'react'
import {  Container, Image } from 'react-bootstrap'
import page2img from "../../assets/images/page2img.png"

const Page2 = () => {
  return (
    <div>
        <section>
            <Container fluid className='m-0 p-0' style={{height:'100vh'}}>
                <div className='row bg-white py-5 my-5'>
                    <div className='col px-5' data-aos="fade-down">
                      <div ><span className='fw-bold text-black' style={{fontSize:'1.8vw'}} >What is</span> <span style={{color:'#50adb5',borderBottom:'4px solid black',fontSize:"3vw"}} className=' fw-bold ' >PriceUp?</span></div>
                      <div className='fw-semibold my-5' style={{fontSize:"1.5vw"}}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p>lorem.</p>
                    </div> 
                    </div>
                    <div className='col ' data-aos="flip-left">
                        <div className='p-4 position-relative ' style={{background:'#50adb5', height:'80vh', borderRadius:'5px',marginTop:'1rem'}}>
                            <Image className='position-absolute ' style={{height:'75%',width:'100%',  top:'12%',right:'15%'}} src={page2img} alt='page2img' />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </div>
  )
}

export default Page2