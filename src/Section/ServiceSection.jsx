import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import '../CSS/Service.css'
import { FaHome } from "react-icons/fa";

function ServiceSection() {

    return(
        <Container fluid="xxl" className='service-div py-5 wow fadeInUp'>
            <Container className='px-lg-5'>
                <div className='S-section-title position-relative text-center mb-5 pb-2 wow fadeInUp'>
                    <h6 className='title ps-4'>Our Services</h6>
                    <h2 className='Service-sub-title'>What Solutions We Provide</h2>
                </div>

                <Row className='g-4'>
                    <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' >
                        <Card className='service-item' data-wow-delay="0.1s">
                           <Card.Body className='card-body'>
                                <div className='service-img'><FaHome className='service-icon'/></div>
                                <Card.Title className='mb-3'>SEO Optimization</Card.Title>
                                <Card.Text>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</Card.Text>
                                <Button className='rad-mor mt-3'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.3s">
                        <Card className='service-item'>
                           <Card.Body className='card-body'>
                                <div className='service-img'><FaHome className='service-icon'/></div>
                                <Card.Title className='mb-3'>Web Design</Card.Title>
                                <Card.Text>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</Card.Text>
                                <Button className='rad-mor mt-3'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.6s">
                        <Card className='service-item'>
                           <Card.Body className='card-body'>
                                <div className='service-img'><FaHome className='service-icon'/></div>
                                <Card.Title className='mb-3'>Social Media Marketing</Card.Title>
                                <Card.Text>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</Card.Text>
                                <Button className='rad-mor mt-3'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.1s">
                        <Card className='service-item'>
                           <Card.Body className='card-body'>
                                <div className='service-img'><FaHome className='service-icon'/></div>
                                <Card.Title className='mb-3'>Email Marketing</Card.Title>
                                <Card.Text>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</Card.Text>
                                <Button className='rad-mor mt-3'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className=' animated wow zoomIn SEO-Optimization' data-wow-delay="0.3s">
                        <Card className='service-item'>
                           <Card.Body className='card-body'>
                                <div className='service-img'><FaHome className='service-icon'/></div>
                                <Card.Title className='mb-3'>PPC Advertising</Card.Title>
                                <Card.Text>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</Card.Text>
                                <Button className='rad-mor mt-3'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6} className='animated wow zoomIn SEO-Optimization' data-wow-delay="0.6s">
                        <Card className='service-item'>
                           <Card.Body className='card-body'>
                                <div className='service-img'><FaHome className='service-icon'/></div>
                                <Card.Title className='mb-3'>App Development</Card.Title>
                                <Card.Text>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</Card.Text>
                                <Button className='rad-mor mt-3'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ServiceSection;