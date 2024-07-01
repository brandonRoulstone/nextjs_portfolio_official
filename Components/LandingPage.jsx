"use client"
import TypeAnimationUi from "./TypeEffectUi";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
// import Carousel from "./CarouselIcon";
// import Card from "./Card";
// import { ArrowIcon } from "./SvgIcons/SvgIcons";
// import MarqueeCarousel from "./MarqueeCarousel/MarqueeCarousel";
// https://aimlapi.com/best-ai-apis-for-free

const LandingPage = () => {
    const { scrollYProgress } = useScroll();
    const path = useRouter();
    const scale = useTransform(scrollYProgress, [0, .5], [1, 0.2]);
    const images = [
        'https://cdn-images.imagevenue.com/e2/8d/dd/ME18HKH0_o.png',
        'https://cdn-images.imagevenue.com/e2/8d/dd/ME18HKH0_o.png',
        'https://cdn-images.imagevenue.com/e2/8d/dd/ME18HKH0_o.png',
    ];

    const routeTo = (route) => {
        path.push(route);
    };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center min-h-[100vh] min-w-[100vw] gap-10 items-center bg-blue-100">
        <motion.div className="absolute top-[30%] left-[70%] h-[3rem] w-[3rem] bg-[regb(12,12,12)] border-[.5rem] border-white rounded-full animate-ping" style={{scale}}></motion.div>

        <div className="flex flex-col justify-center text-center min-w-[50vw]">
            <div className="lg:text-6xl text-4xl mx-5 lg:mx-0 font-bold font-serif text-zinc-900">

                <div className="pb-2">
                    <TypeAnimationUi />
                </div>

                <span className="bg-gradient-to-t from-zinc-800 via-zinc-700 to-zinc-900 bg-clip-text text-transparent">A REVOLUTIONIZING</span>
                <br />
                <span className="bg-gradient-to-l from-cyan-800 via-blue-400 to-cyan-800 bg-clip-text text-transparent">SUPER SOFTWARE</span> .
            </div>
            <div className="mt-5 gap-10 flex justify-center">
                
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn btn-lg rounded-2xl bg-transparent text-zinc-900 hover:bg-blue-500 hover:text-blue-50 border border-zinc-900 lg:text-2xl cursor-pointer">
                    Get started
                </motion.button>
                
                <motion.button 
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => routeTo('/dashboard')}
                    className="btn btn-lg rounded-2xl bg-transparent hover:bg-transparent hover:border-zinc-900 hover:text-zinc-900 border border-blue-500 lg:text-2xl cursor-pointer text-blue-500">
                    Go to dashboard 
                </motion.button>

            </div>
        </div>

        <div className="min-w-[50vw] flex justify-center">
            <Image src="https://cdn-images.imagevenue.com/6f/26/c4/ME18IINN_o.jpg" alt="ai_gen" height={700} width={700} className="rounded-3xl object-contain shadow-[-23px_20px_194px_0px_#805ad5]"/>
            <Image src="https://cdn-images.imagevenue.com/6f/26/c4/ME18IINN_o.jpg" alt="ai_gen" height={300} width={300} className="rounded-3xl object-contain shadow-[-23px_20px_194px_0px_#805ad5] absolute top-[6rem] left-[51%] lg:flex hidden"/>
        </div>
        
    </div>
  )
}

export default LandingPage;
