import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "motion/react"

function Contact() {
  return (
    <motion.div  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Get in touch</h1>
        <div className='text-center tracking-tighter'>
            <a href='https://www.linkedin.com/in/mohammed-fadi-cp/' target='blank' className='my-4'>{CONTACT.address}</a>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a className='border-b' href="#">{CONTACT.email}</a>
        </div>
    </motion.div>
  )
}

export default Contact 
