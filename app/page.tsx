"use client";
import { Hero } from "./components/Hero";
import { Toggle } from "./components/Toggle";
import { SobreMim } from "./components/SobreMim";
import { Projetos } from "./components/Projetos";
import { Skils } from "./components/Skills";
import { Contato } from "./components/Contato";
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import { Footer } from "./components/Footer";

export default function Home() {

  useEffect(() => {
    AOS.init({duration: 1000, delay: 100 });
  }, []);

  return (
    <div className=" w-full z-[-10] bg-zinc-100 dark:bg-zinc-900">
      <Toggle />
      <Hero />
      <SobreMim />
      <Projetos />
      <Skils />
      <Contato />
      <Footer />
    </div>
    
  );
}
