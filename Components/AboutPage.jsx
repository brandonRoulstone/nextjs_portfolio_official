"use client"
// import { useEffect } from "react";
import { motion, useScroll, useTransform, useAnimate, animate } from "framer-motion";
// import Item from "./SkillsetIcons";
// import Cursor from "./Cursor";
// import Image from "next/image";
const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, .4], [0.2, 1]);
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-col-reverse lg:flex-row-reverse w-[100%] bg-[rgb(0,0,0)] p-4">
        
        <motion.div style={{scale}} className="mockup-browser border w-[100%] border-violet-700 bg-zinc-50 mx-4 h-[70vh] shadow-[-23px_20px_194px_0px_#805ad5]" id="windowCMD">

          <div className="mockup-browser-toolbar">
            <div className="input">https://Dxsigner.io</div>
          </div>

          <div className="flex h-[100%] bg-zinc-300 font-[inconsolata] text-zinc-700 w-[100%] overflow-x-hidden">

            <div className="w-[33.3%] text-xl bg-gray-400 h-[100%]">
              weerytuiyo
            </div>
            
            <div className="w-[77.7%] text-xl bg-gray-100">

              <div className="h-[10%] flex items-center justify-evenly bg-white shadow-xl py-1">
                <button className="btn tooltip flex justify-center tooltip-bottom" data-tip="open toolbar">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                </button>

                <button className="btn tooltip flex justify-center tooltip-bottom" data-tip="open toolbar">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                </button>

                <button className="btn tooltip flex justify-center tooltip-bottom" data-tip="open toolbar">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                </button>

              </div>

              <div className="h-[90%] flex flex-col justify-center items-center">
                weerytuiyo
              </div>
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

          <div className="text-center w-[100%] flex lg:flex-row flex-col gap-3 mb-3 md:mt-10">

            <div className="text-xl font-extrabold py-2 px-4 border border-violet-300 mx-3 rounded-3xl skeleton">
              Reimagine design
            </div>
            
            <div className="text-xl font-extrabold py-2 px-4 border border-violet-300 mx-3 rounded-3xl skeleton">
              Reanimate design
            </div>

            <div className="text-xl font-extrabold py-2 px-4 border border-violet-300 mx-3 rounded-3xl skeleton">
              Redesign design
            </div>

            <div className="text-xl font-extrabold py-2 px-4 border border-violet-300 mx-3 rounded-3xl skeleton">
              Rethink design
            </div>

          </div>
        </div>
        
      </div>
    </>
  )
}

export default AboutPage;
