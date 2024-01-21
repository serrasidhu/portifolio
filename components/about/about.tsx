import React from 'react';
import { FaReact,FaJava,FaHtml5,FaCss3,FaPython} from 'react-icons/fa';
import Image from "next/image"
export default function About() {
    return ( 
        <div className="bg-white w-screen p-14 h-screen flex-col  text-center  ">
            <h1 className="text-[#172D13] text-5xl font-semibold text-center p-4">About Me</h1>
             <div className="flex justify-start items-start">
              
                  <section className=" text-[#172D13]">     
            <p className="flex flex-col justify-centertext-center px-14 text-xl ">
               <br/> After Fsc with a degree in biology.<br/>
               I decided to pursue my passion for programming. Now I am start my graduate degree in BsCS.<br /> I enrolled in a coding and learned full-stack web development.<br />My favorite part of programming is the problem-solving aspect.<br />I am familiar with TypeScript,HTML,Tailwind Css,Python,React.
                <br/>I am also looking to learn new technologies. I am currently looking for a full-time position as a software developer.<br />
                When I'am free, I enjoy playing video games, watching movies, and playing football.
            </p>
            
             </section>
             </div> 
             <div className="flex flex-row justify-center gap-4 bg-White p-6 ">
           <FaReact className="w-32 h-32  text-[#D76F30]" ></FaReact>
           <FaJava className="w-32 h-32  text-[#D76F30]" ></FaJava>
           <FaHtml5 className="w-32 h-32  text-[#D76F30]" ></FaHtml5>
           <FaCss3 className="w-32 h-32  text-[#D76F30]" ></FaCss3>
           <FaPython className="w-32 h-32  text-[#D76F30]" ></FaPython>
           
           </div>
        </div>
    )
}