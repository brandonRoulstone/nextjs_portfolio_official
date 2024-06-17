"use client"
// import { useEffect } from "react";
import { motion, useScroll, useTransform, useAnimate, animate } from "framer-motion";
// import Item from "./SkillsetIcons";
// import Cursor from "./Cursor";
// import Image from "next/image";
const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, .4], [0.2, 1]);
  const [scope, animate] = useAnimate();
  // useEffect(() => {
  //   animate("p", { opacity: 1 })
  // });
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col-reverse lg:flex-row-reverse w-[100%] bg-[rgb(0,0,0)] p-4">
        
        <motion.div style={{scale}} className="mockup-window border w-[100%] border-violet-700 bg-zinc-950 mx-4 h-[70vh] shadow-[-23px_20px_194px_0px_#805ad5]" id="windowCMD">
          <div className="flex h-screen px-4 py-16 bg-black font-[inconsolata] text-zinc-400 w-[100%] overflow-x-hidden">
            <div className="text-start text-xl">
              <p>C:\Users\randomUser {'>'} Code me a Random Template.html</p> 
              <br /> 
              <p>{"'"} Code me a Random Template.html {"'"} is not recognized as an internal or external command,
              operable program or batch file. <span className="text-violet-300">Check out Dxsigner.io</span></p>
            </div>

          </div>

        </motion.div>

        <div className="flex flex-col justify-center w-[100%] mx-4">
          <div className="text-zinc-50 text-5xl flex">
            <h2 className="font-semibold w-50">Create Something <span className="text-purple-400">Attractive.</span></h2>
            <svg
              width="28"
              height="40"
              viewBox="0 0 34 46"
              fill="none"
              stroke="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
              d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
              fill="black"
              />

            </svg>
          </div>
          <h3 className="w-50 font-semibold mx-1 my-1 text-xl">Take design to the Next Level . . .</h3>

          <motion.div className="text-center w-[100%] flex lg:flex-row flex-col gap-3 mb-3">

            <div className="text-xl font-extrabold py-2 px-4 border mx-3 rounded-3xl skeleton">
              Reimagine design
            </div>

            <div className="text-xl font-extrabold py-2 px-4 border mx-3 rounded-3xl skeleton">
              Reanimate design
            </div>

            <div className="text-xl font-extrabold py-2 px-4 border mx-3 rounded-3xl skeleton">
              Redesign design
            </div>

            <div className="text-xl font-extrabold py-2 px-4 border mx-3 rounded-3xl skeleton">
              Rethink design
            </div>

          </motion.div>
        </div>
        
      </div>
    </>
  )
}

export default AboutPage;
