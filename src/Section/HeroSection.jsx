
import React from 'react';
import '../CSS/Hero.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import hero from '../Images/hero.png'
import { Container } from "react-bootstrap";

function HeroSection() {
  return (
    <Container fluid="xxl" className='Hero_div py-5 mb-5'>
      <Container className='my-5 py-5 px-lg-5 hero-header'>
        <Row className='g-5 py-5'>
          <Col className='text-col text-center text-lg-start'>
            <h1 className='hero-heading mb-4 zoomIn animated'>  All in one SEO tool need to grow your business rapidly</h1>
            <p className='hero-sub zoomIn pb-3 animated'>Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd.
              Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem
            </p>
            <Button className='Quote-Button py-sm-3 px-sm-5 slideInLeft animated' variant="outline-light">Free Quote</Button>{' '}
            <Button className='Contact-Button py-sm-3 px-sm-5 slideInRight animated' variant="outline-light">Contact Us</Button>{' '}
          </Col>
          <Col className='img-col text-center text-lg-start'><img src={hero} alt="" className='Hero-img img-fluid' /></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HeroSection;