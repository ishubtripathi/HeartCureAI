import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { Statistics } from '../components/Statistics';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export const Home = () => {
  const navigate = useNavigate();
  
  const handleStartAssessment = () => {
    navigate('/assessment');
  };

  return (
    <div>
      <Hero onStartAssessment={handleStartAssessment} />
      <Features />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};