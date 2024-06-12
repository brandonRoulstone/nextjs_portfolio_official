"use client"
import { motion, useScroll, useTransform } from "framer-motion";
const AboutPage = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <motion.div style={{scale}} className="text-3xl font-bold">About Me</motion.div>
    </div>
  )
}

export default AboutPage
