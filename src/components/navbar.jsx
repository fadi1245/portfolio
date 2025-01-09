import React from 'react'
import logo from '../assets/F.png'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa"
function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} className="mx-2 w-20" alt="" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/mohammed-fadi-cp/" target='blank'><FaLinkedin/></a>
            <a href="https://github.com/fadi1245" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            <a href="https://www.instagram.com/mhd_fadi_/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar
