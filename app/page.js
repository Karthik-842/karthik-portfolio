'use client';
import React from 'react';
import Image from "next/image"; 
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from './Components/About';
import Footer from "./components/Footer";
import "./globals.css";


export default function Home() {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}
