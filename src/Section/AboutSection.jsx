
import {Row, Col} from 'react-bootstrap';
import { Container } from "react-bootstrap";
import React from 'react';
import abtImg from '../Images/about.jpg';
import '../CSS/About.css';
import { BsCheck } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

function AboutSection() {

  return (
    <Container fluid="xxl" className='About-div py-5'>
    <Container className='content-div px-lg-5'>
      <Row className="abt-content g-5">
        <Col className='abt-text-col wow animated fadeInUp'>
          <div className='abt-text-div mb-4 pb-2'>
            <h6 className='abt-heading'>About Us</h6>
            <h2 className="abt-title">The best SEO solution with 10 years of experience</h2>
          </div>
          <p className='abt-brief mb-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
          <Row className='tick-points'>
            <Col className='tick-Col1 col-sm-6'>
             <BsCheck className='tick-icon' /> <h6 className='tick-text tick-text-1 mb-3'>Award Winning</h6>
             <BsCheck className='tick-icon' /> <h6 className='tick-text tick-text-2 '>Professional Staff</h6>
             </Col>
            <Col className='tick-Col2 col-sm-6'>
             <BsCheck className='tick-icon' /> <h6 className='tick-text tick-text-3 mb-3'>24/7 Support</h6>
             <BsCheck className='tick-icon' /> <h6 className='tick-text tick-text-4 '>Fair Prices</h6>
            </Col>
          </Row>
          <Row>
            <div className='align-items-center mt-3 abt-end'>
              <button className='abt-more-btn px-4 me-3 news_readMore'>Read More</button>
              <div className='icon-div mt-3'>
                <button className='socialM-icon me-3'><FaFacebookF /></button>
                <button className='socialM-icon me-3'><BsTwitterX /></button>
                <button className='socialM-icon me-3'><BsInstagram /></button>
                <button className='socialM-icon'><FaLinkedinIn /></button>
              </div>
            </div>
          </Row>
        </Col>
        <Col className='abt-img-col'><img className='abt-img wow animated zoomIn img-fluid' src={abtImg} alt="abt-img.jpg" /></Col>
      </Row>
    </Container>
  </Container>
  );
};

export default AboutSection;
