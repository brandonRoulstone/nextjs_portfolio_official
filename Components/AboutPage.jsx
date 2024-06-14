"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Item from "./SkillsetIcons";
// import Cursor from "./Cursor";
import Image from "next/image";
const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  // const { scrollProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, .4], [0.2, 1]);
  // const scaleX = useTransform(scrollXProgress, [0, 1], [0.2, 2]);
  return (
    <>
      <div className="min-h-screen flex justify-center flex-col w-[100%] bg-[rgb(16,16,16)]">

        <motion.div style={{scale}}  className="mockup-window border border-zinc-950 bg-zinc-950 mx-4 h-[70vh]">

          <div className="flex h-screen px-4 py-16 bg-black font-[inconsolata] text-white w-[100%]">

            <div className="text-start text-xl">Hello world</div>

          </div>

        </motion.div>

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
