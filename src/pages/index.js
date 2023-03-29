/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import Image from 'next/image'

import Navbar from '../../Layout/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Service from '../components/Service'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import OurAim from '../components/OurAim'
import Contact from '../components/Contact'

import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  
  return (
  <div>
      <Head>
        <title>PadhoG</title>
        <meta name="PadhoG" content="PadhoG provides learners with quick notes, project ideas, and book PDFs for competitive exams" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div>
       
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <OurAim />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Rohit Kumar</h6>
        <p>PadhoG © All CopyRights Reserved 2023</p>
      </footer>
    </div>
    </div>
  )
}
