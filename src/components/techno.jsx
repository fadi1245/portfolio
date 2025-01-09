import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { FaNodeJs } from "react-icons/fa";
import {FaHtml5} from 'react-icons/fa'
import { FaCss3 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { motion } from "motion/react"

const container=(duration)=>({
    initial:{y:-10},
    animate:{y:[10,-10],
    transition:{
        duration:duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
    }}
})

function Techno() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className='my-20  text-4xl text-center'>Technoledgies</motion.h2>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0, x:100}}transition={{duration:1}} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={container(2.5)} initial="initial" animate="animate" title='react' className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-5xl text-cyan-500'/>
            </motion.div>
            <motion.div variants={container(3)} initial="initial" animate="animate" title='node' className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-5xl text-green-400'/>
            </motion.div>
            <motion.div variants={container(2)} initial="initial" animate="animate" title='html' className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className='text-5xl text-orange-600'/>
            </motion.div>
            <motion.div variants={container(3.5)} initial="initial" animate="animate" title='css' className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3 className='text-5xl text-blue-600'/>
            </motion.div>
            <motion.div variants={container(4)} initial="initial" animate="animate" title='mongodb' className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-5xl text-green-700'/>
            </motion.div>
            <motion.div variants={container(2.5)} initial="initial" animate="animate" title='express.js' className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className='text-5xl'/>
            </motion.div>
            <motion.div variants={container(3)} initial="initial" animate="animate" title='tailwind' className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className='text-5xl text-cyan-600'/>
            </motion.div>
            <motion.div variants={container(3.5)} initial="initial" animate="animate" title='bootstrap' className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className='text-5xl text-purple-600'/>
            </motion.div>
            <motion.div variants={container(2.5)} initial="initial" animate="animate" title='material ui' className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMui className='text-5xl text-cyan-500'/>
            </motion.div>
            <motion.div variants={container(2)} initial="initial" animate="animate" title='axios http' className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAxios className='text-5xl text-blue-500'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Techno
