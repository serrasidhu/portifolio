import React from "react"
import { FaPaperPlane } from "react-icons/fa"
export default function Contact() {
    return(
           <div className="bg-[#172D13] h-screen relative w-screen p-7 shadow-lg">
            <h1 className="text-white text-5xl text-center relative p-7">Contact Me</h1>
            <section id="contact" className="text-center ">
            <p className="text-white gap-2">
                Please contact me directly at{"  "}
                <a className="underline"
                    href="mailto:exmple@gmail.com">exmple@gmail.com</a>{"  "}
                or through this form.
            </p>
            <form className="mt-10 flex flex-col">
                <input className=" h-14 my-3 rounded-lg border-black p-4" required maxLength={500} type="name" placeholder="Your Name" />
                <input className="h-14 px-4   rounded-lg borderBlack" required maxLength={500} type="email" placeholder="Your email" />
                <textarea className="flex items-center justify-center gap-2 h-52 my-3 rounded-lg border-black p-4 " placeholder="Your message" />
                <button type="submit" className="h-[3rem] w-[8rem] bg-[#D76F30] text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 #6BB77B:bg-[#6BB77B] active:scale-105">
                    Sumbit 
                </button>
            </form>
        </section></div>
    )
}