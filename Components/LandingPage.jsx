"use client"
import TypeAnimationUi from "./TypeEffectUi";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Carousel from "./CarouselIcon";
import Card from "./Card";

const LandingPage = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, .5], [1, 0.2]);
    const images = [
        'https://cdn-images.imagevenue.com/e2/8d/dd/ME18HKH0_o.png',
        'https://cdn-images.imagevenue.com/e2/8d/dd/ME18HKH0_o.png',
        'https://cdn-images.imagevenue.com/e2/8d/dd/ME18HKH0_o.png',
    ];
  return (
    <div className="flex flex-col justify-center min-h-[100vh] items-center bg-[rgb(12,12,12)]">
        
        <motion.div className="absolute top-[30%] left-[70%] h-[3rem] w-[3rem] bg-[regb(12,12,12)] border-[.5rem] border-white rounded-full animate-ping" style={{scale}}></motion.div>

        <div className="flex flex-col">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 200,
                        restDelta: 0.001
                    }
                }}
                className="text-6xl font-bold font-serif text-zinc-100">

                <div className="pb-2">
                    <TypeAnimationUi />
                </div>

                <span className="">Transform </span>
                <span className="bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-500 bg-clip-text text-transparent animate-pulse"> Your Portfolio</span> .
            </motion.div>
        </div>

        <div className="mt-10 flex gap-10 justify-center">
            {/* <button className="btn bg-white hover:bg-transparent hover:text-white border border-white text-2xl cursor-pointer text-zinc-950">My work</button> */}
            <motion.button
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileTap={{ scale: 0.9 }}
                className="btn bg-transparent hover:bg-white hover:text-purple-700 border border-white text-2xl cursor-pointer text-zinc-50">
                About Dxssinger
            </motion.button>
            <motion.button 
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileTap={{ scale: 0.9 }}
                className="btn bg-white hover:bg-transparent hover:border-white hover:text-white border border-white text-2xl cursor-pointer text-purple-700">
                Get started 
            </motion.button>
        </div>
        <>
            <a href="mailto:brandonroulstone465@gmail.com" target="_blank" className="fixed bottom-[8.5%] right-[.5%] border border-white bg-zinc-950 px-2 py-2 rounded-full tooltip tooltip-left shadow-lg cursor-pointer hover:translate-y-[-.6rem] ease-in-out transition-all z-50" data-tip="Contact me">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
            </a>
        </>
        {/* <Carousel images={images} /> */}
        <div className="absolute bottom-3 flex gap-5">
            <Card title="Hello world" image="https://cdn-images.imagevenue.com/ae/09/66/ME18I51M_o.jpg" heading="New Title" text="Hello from a new init world" button="Click now" />
            <Card title="Hello world" image="https://cdn-images.imagevenue.com/ae/09/66/ME18I51M_o.jpg" heading="New Title" text="Hello from a new init world" button="Click now" />
            <Card title="Hello world" image="https://cdn-images.imagevenue.com/ae/09/66/ME18I51M_o.jpg" heading="New Title" text="Hello from a new init world" button="Click now" />
        </div>
    </div>
  )
}

export default LandingPage;
