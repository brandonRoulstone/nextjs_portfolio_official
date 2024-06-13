"use client"
import TypeAnimationUi from "./TypeEffectUi";
import { motion, useScroll, useTransform } from "framer-motion";

const LandingPage = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div className="flex flex-col justify-center min-h-[100vh] items-center bg-blue-50">
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
                        stiffness: 100,
                        restDelta: 0.001
                      }
                }}
                className="text-6xl font-bold font-serif text-zinc-950"
                >
                <div className="pb-2">
                    <TypeAnimationUi />
                </div>
                    Hello I am 
                <span className="bg-gradient-to-r from-blue-500 via-cyan-900 to-blue-500 bg-clip-text text-transparent"> Brandon Roulstone</span> .
            </motion.div>
            {/* <h3>I code & chill...</h3> */}
        </div>

        <div className="pt-3 flex gap-3 justify-center">
            <button className="btn bg-transparent hover:bg-transparent w-[100%] border border-blue-300 text-2xl text-zinc-600">My work</button>
            <button className="btn bg-transparent hover:bg-transparent w-[100%] border border-blue-300 text-2xl text-zinc-600">About me</button>
        </div>

        <>
            <a href="mailto:brandonroulstone465@gmail.com" target="_blank" className="fixed bottom-[2%] right-[2%] border border-blue-300 bg-blue-600 px-2 py-2 rounded-full tooltip tooltip-left shadow-lg cursor-pointer hover:translate-y-[-.6rem] ease-in-out transition-all" data-tip="Contact me">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
            </a>
        </>

    </div>
  )
}

export default LandingPage
