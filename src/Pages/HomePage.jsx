import React from 'react';
import '../CSS/Home.css';
import { Container } from "react-bootstrap";
import AboutSection from "../Section/AboutSection";
import Newsletter from "../Section/NewsletterSec";
import HeroSection from '../Section/HeroSection';
import ServiceSection from '../Section/ServiceSection';
import ProjectSection from '../Section/ProjectSection';
import FeedbackSection from '../Section/FeedbackSection';
import TeamSection from '../Section/TeamSection';


function HomePage(){
  
  return(
    <Container fluid="xxl" className="home-div">
      <HeroSection/>
      <AboutSection/>
      <Newsletter/>
      <ServiceSection/>
      <ProjectSection/>
      <FeedbackSection/>
      <TeamSection/>
      
    </Container>
  )
}

export default HomePage;