"use client"
import LandingPage from "@/Components/LandingPage";
import AboutPage from "@/Components/AboutPage";
import ProjectsPage from "@/Components/ProjectsPage";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";


export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress)
  const scale = useTransform(scrollYProgress, [1, 0], [2, 0.2]);
  return (
    <main className="overflow-hidden">
      <section>

      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      /> 

      <LandingPage />

      </section>

      <section className="min-h-screen flex flex-col">
        <AboutPage />
      </section>

      <section className="min-h-screen flex flex-col justify-center items-center">
        <ProjectsPage />
      </section>

    </main>
  );
}
