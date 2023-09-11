import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import CompanySection from "./CompanySection/CompanySection";
import ServiceSection from "./ServiceSection/ServiceSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Home = () => (
  <>
    <Header />
    <HeroSection />
    <CompanySection />
    <ServiceSection />
    <ExperienceSection />
    <ProjectSection />
    <TestimonialSection />
    <Footer />
    <ScrollToTop />
  </>
);

export default Home;
