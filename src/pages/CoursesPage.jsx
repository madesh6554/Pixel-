import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Courses from '../components/Courses';
import Footer from '../components/Footer';

const CoursesPage = () => (
  <>
    <Helmet>
      <title>Courses | The Pixel Academy</title>
      <meta
        name="description"
        content="Learn the exact systems The Pixel Company uses internally — marketing playbooks, branding essentials, AI tools, and prompt engineering."
      />
    </Helmet>
    <Header />
    <main>
      <Courses />
    </main>
    <Footer />
  </>
);

export default CoursesPage;
