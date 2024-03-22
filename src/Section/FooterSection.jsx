import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';


import React from "react";
import '../CSS/Footer.css'

function FooterSection() {
    return(
        <Container fluid='xxl' className="footer-div mt-5 pt-5 wow fadeIn">
            <Container className="py-5 px-lg-5">
                <Row className="g-5 footer-row">
                    <Col lg={3} md={6} className="GIntouch">
                        <h5 className="mb-4 GIn-heading">Get In Touch</h5>
                        <p className="p-tag mb-3"> <FaLocationDot className="GIn-icon me-2" />123 Street, New York, USA</p>
                        <p className="p-tag mb-3"> <FaPhone className="GIn-icon me-2"/>+012 345 67890</p>
                        <p className="p-tag mb-4"> <IoIosMail className="GIn-icon me-2"/>info@example.com</p>
                        <div className='icon-div mt-3'>
                           <button className='GIn-socialM-icon me-3'><FaFacebookF /></button>
                           <button className='GIn-socialM-icon me-3'><BsTwitterX /></button>
                           <button className='GIn-socialM-icon me-3'><BsInstagram /></button>
                           <button className='GIn-socialM-icon'><FaLinkedinIn /></button>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <h5 className="mb-4 link-heading">Link</h5>
                        <p className="p-link"><MdOutlineKeyboardArrowRight className="right-arrow" /><Link to="/about" className="linkS">Home</Link></p>
                        <p className="p-link"><MdOutlineKeyboardArrowRight className="right-arrow"/><Link to="/" className="linkS">About Us</Link></p>
                        <p className="p-link"><MdOutlineKeyboardArrowRight className="right-arrow"/><Link to="/" className="linkS">Service</Link></p>
                        <p className="p-link"><MdOutlineKeyboardArrowRight className="right-arrow"/><Link to="/" className="linkS">Project</Link></p>
                        <p className="p-link"><MdOutlineKeyboardArrowRight className="right-arrow"/><Link to="/" className="linkS">Contact</Link></p>
                    </Col>
                    <Col lg={3} md={6}></Col>
                    <Col lg={3} md={6}></Col>
                </Row>
            </Container>
        </Container>
    ) 
}

export default FooterSection;