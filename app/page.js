'use client';
import React from 'react';
import "./globals.css";
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Skills from './components/Skills';
import TimeLine from './components/TimeLine';


export default function Home() {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <TimeLine />
        <Skills/>
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}
