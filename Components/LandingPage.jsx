"use client"
import TypeAnimationUi from "./TypeEffectUi";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const LandingPage = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, .5], [1, 0.2]);
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
                className="text-6xl font-bold font-serif text-zinc-100"
                >
                <div className="pb-2">
                    <TypeAnimationUi />
                </div>
                    Hello I am 
                <span className="bg-gradient-to-r from-zinc-500 via-zinc-900 to-zinc-500 bg-clip-text text-transparent animate-pulse"> Brandon Roulstone</span> .
            </motion.div>
        </div>

        <div className="pt-3 flex gap-10 justify-center">
            <button className="btn bg-white hover:bg-transparent hover:text-white w-[100%] border border-white text-2xl cursor-pointer text-zinc-950">My work</button>
            <button className="btn bg-transparent hover:bg-white hover:text-black w-[100%] border border-white text-2xl cursor-pointer text-zinc-50">About me</button>
        </div>

        <>
            <a href="mailto:brandonroulstone465@gmail.com" target="_blank" className="fixed bottom-[8.5%] right-[.5%] border border-white bg-zinc-950 px-2 py-2 rounded-full tooltip tooltip-left shadow-lg cursor-pointer hover:translate-y-[-.6rem] ease-in-out transition-all" data-tip="Contact me">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
            </a>
        </>

        <div className="absolute bottom-0 left-0 w[100%] grayscale z-[10]">
            <div className="chat chat-start absolute left-[60%] top-4 pointer-events-none">
                <div className="chat-bubble w-[17rem] bg-[rgb(21,21,21)] text-white">console.log{"('"}Hello There{"')"};</div>
            </div>
            <Image alt="chilled_person" src="https://cdn-images.imagevenue.com/e2/8d/dd/ME18HKH0_o.png" height={350} width={350} />
        </div>
        {/* <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fillOpacity="1" d="M0,32L13.3,58.7C26.7,85,53,139,80,176C106.7,213,133,235,160,240C186.7,245,213,235,240,240C266.7,245,293,267,320,266.7C346.7,267,373,245,400,229.3C426.7,213,453,203,480,186.7C506.7,171,533,149,560,138.7C586.7,128,613,128,640,117.3C666.7,107,693,85,720,85.3C746.7,85,773,107,800,138.7C826.7,171,853,213,880,192C906.7,171,933,85,960,58.7C986.7,32,1013,64,1040,80C1066.7,96,1093,96,1120,101.3C1146.7,107,1173,117,1200,133.3C1226.7,149,1253,171,1280,181.3C1306.7,192,1333,192,1360,170.7C1386.7,149,1413,107,1427,85.3L1440,64L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path></svg> */}
    </div>
  )
}

export default LandingPage;
