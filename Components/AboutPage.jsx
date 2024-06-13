"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Item from "./SkillsetIcons";
import Image from "next/image";
const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-row w-[100%] bg-[rgb(12,12,12)]">
        <div className="w-[100%] flex justify-center min-h-screen items-center">
          <div className="">
            <h1 className="text-4xl">About Me</h1>
          </div>
        </div>
        <motion.div style={{scale}} className="w-[100%] flex justify-center min-h-screen items-center">
          <Image src="https://cdn-images.imagevenue.com/99/06/5a/ME18HJDQ_o.jpg" height={400} width={400} alt="" />
          {/* <div className="container py-5">
            <Item />
          </div> */}
        </motion.div>
      </div>
    </>
  )
}

export default AboutPage;
