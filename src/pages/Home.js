import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactBanner from '../components/ContactBanner'
import HeroSection from '../components/HeroSection'
import ProjectionSection from '../components/ProjectionSection'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'

export default function Home() {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <ServicesSection/>
            <ProjectionSection/>
            <TestimonialsSection/>
            <ContactBanner/>
        </>
    )
}
