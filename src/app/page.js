"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Skip from "@/components/Skip";
import Intro from "@/components/intro";
import Skill from "@/components/skill";
import Site from "@/components/Site";
import Port from "@/components/port";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import lenis from "@/utils/lenis";
import link from "@/utils/link";


export default function Home(){
  useEffect(()=>{
    lenis();
    link();
  }, []);
  
  return (
    <>
      <Skip />
      <Header />
      <main id="main" role="main">
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </main>
      <Footer />
    </>
  )
}