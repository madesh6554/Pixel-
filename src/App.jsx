import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesOverview from './pages/ServicesOverview';
import ServiceDetail from './pages/ServiceDetail';
import CourseDetail from './pages/CourseDetail';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <HelmetProvider>
      <AnimatedBackground />
      <ChatBot />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
