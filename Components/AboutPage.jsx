"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Item from "./SkillsetIcons";
import Cursor from "./Cursor";
import Image from "next/image";
const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  // const { scrollProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, .4], [0.2, 1]);
  // const scaleX = useTransform(scrollXProgress, [0, 1], [0.2, 2]);
  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-row-reverse w-[100%] bg-[rgb(0,0,0)]">
        
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
          <h3 className="w-50 font-semibold mx-2">Take design to the Next Level...</h3>
        </div>

        {/* <div className="w-[100%] flex justify-center">

          <div className="w-[100%] text-start mx-4 my-3">
            <h1 className="lg:text-6xl text-white text-3xl">About Me ...</h1>

            <hr className="w-[25%] my-2"/>

            <div className="text-white w-[50%]">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laboriosam reprehenderit cupiditate dolor alias dolore quidem magni minima consectetur doloremque inventore rem mollitia doloribus, ratione amet aspernatur tenetur, nulla ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ex quidem veniam vero alias quis laborum reprehenderit. At, perspiciatis explicabo repudiandae adipisci nulla fugit illo nobis. Praesentium sit at nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nobis sed! Maxime, accusantium aliquam minima minus cumque, ut magni reprehenderit nisi magnam doloribus placeat, quaerat debitis eos animi eum odit!</p>
            </div>

          </div>

        </div>

        <div className="container py-5 flex justify-center">
          <Item />
        </div>

        <div className="w-[100%] h-[20rem] flex justify-center">
          <Image className="w-[100%] object-cover mx-4" src="https://cdn-images.imagevenue.com/99/06/5a/ME18HJDQ_o.jpg" height={400} width={400} alt="" />
        </div> */}
        
      </div>
    </>
  )
}

export default AboutPage;
