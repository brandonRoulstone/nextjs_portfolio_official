"use client"
// import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavigationBar = () => {
    const [ open, isOpen ] = useState(false);

    const handleShow = (bool) => {
        isOpen(bool)
    }

  return (
    <>
        <div className="navbar bg-[rgb(12,12,12)] fixed top-0 z-50">
            <div className="flex-none">
                <label className="btn bg-transparent border-none btn-circle swap swap-rotate hover:bg-transparent">

                    {/* this hidden checkbox controls the state */}

                    { open !== true ? (
                        <input type="checkbox" onClick={() => handleShow(true)} />
                    ) : (
                        <input type="checkbox" onClick={() => handleShow(false)} />
                    )}
                    
                    <svg className="swap-off fill-zinc-50 z-50" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    
                    {/* close icon */}
                    <svg className="swap-on fill-zinc-50 z-50" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                
                </label>                
            </div>

            <div className="flex-1 px-1 z-50">
                <Link href="/" className="text-3xl bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 bg-clip-text text-transparent flex font-[baloo] font-extrabold">
                   <span className='bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 bg-clip-text text-transparent'>{'<'} </span> <span className='skeleton bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 bg-clip-text text-transparent'>Brandon</span> Roulstone /<span className='bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 bg-clip-text text-transparent'> {'>'}</span>
                </Link>
            </div>

        </div>

        { open === true ? (
                <div className="translate-nav bg-[rgb(22,22,22)] h-[100vh] w-72 fixed top-18 flex justify-center items-center ease-linear transition-all z-10" id="navbar">
                    <ul className="flex justify-evenly flex-col list-none text-xl font-semibold">

                        <div className="h-[100vh] flex flex-col justify-center min-w-[100%] items-center top-[5rem] gap-11 text-zinc-50">

                            <li><Link href="/">Home</Link></li>

                            <li><Link href="/">About me</Link></li>

                            <li><Link href="/">Reviews</Link></li>

                            <li><Link href="/">Projects</Link></li>

                            <li><Link href="/">Contact me</Link></li>

                        </div>

                    </ul>
                </div>
        ) : (
            <div className="opacity-0 transition-all"></div>
        ) }
      
    </>
  )
}

export default NavigationBar;