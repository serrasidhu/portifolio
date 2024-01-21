import Image from 'next/image'
import ImageTwo from '@/public/OIP (4).jpg'
import Button from '../button/page'

import {FaFacebookF , FaInstagram , FaTwitter , FaLinkedin, FaGithub} from "react-icons/fa"
import React from "react"
import Link from 'next/link'
const Navbar =() => {
    return(
        <div className="w-full h-[65px]  fixed top-0 shadow-lg bg-white backdrop-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
                    <div>
                <Image src={ImageTwo} alt='imgB' width={40} height={40}
                className='cursor-pointer hover:animate-slowspin rounded-full' />
                   </div>
                <span className='font-bold ml-[10px] hidden md:block text-green-900'>
                    Sara Murtaza
                </span>
                </a>
                <div className="icons flex flex-row gap-5 text-4xl">
                     <Link className="text-[#D76F30] hover:text-[#172D13]" href={"https://github.com/serrasidhu"}><FaGithub/></Link> 
                     <Link className="text-[#D76F30] hover:text-[#172D13] " href={"https://www.instagram.com/serra__sidhu/"}><FaInstagram /></Link> 
                     <Link className="text-[#D76F30] hover:text-[#172D13]" href={"https://www.linkedin.com/in/sara-murtaza-630046290"}><FaLinkedin /></Link> 
                  </div>
                  
                  
                 
            </div>
        </div>
    
    )
}
export default Navbar