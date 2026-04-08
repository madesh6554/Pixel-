import React from 'react';
import { Helmet } from 'react-helmet-async';

// Extracted Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import CompanyInfo from '../components/CompanyInfo';
import Services from '../components/Services';
import OurServices from '../components/OurServices';
import Courses from '../components/Courses';
import Founders from '../components/Founders';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>The Pixel Company | Creative Intelligence & Automation</title>
        <meta name="description" content="We build brands, design systems, and automate processes to help you scale sustainably. Digital marketing, web development, and educational courses." />
      </Helmet>
      
      <Header />
      <main id="main-content">
        {/* 1. Hero / Branding */}
        <Hero />
        
        {/* 2. Services & Courses */}
        <Services />
        <OurServices />
        <Courses />
        
        {/* 4. Process / How It Works */}
        <Founders />
        
        {/* 5. Social Proof / Trusted Partners */}
        <TrustedBy />
        
        {/* 6. FAQ Section */}
        <FAQSection />

        {/* 7. Final CTA Connection */}
        <ContactSection />
      </main>
      
      {/* 8. Modern Footer */}
      <Footer />
    </>
  );
};

export default Home;
